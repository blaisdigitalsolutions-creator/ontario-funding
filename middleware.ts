import { NextRequest, NextResponse } from 'next/server'
const rateMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const RATE_LIMIT_MAX = 5
function isRateLimited(ip: string): boolean {
  const now = Date.now(); const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) { rateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS }); return false }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count++; return false
}
function isAdminAuthenticated(req: NextRequest): boolean {
  const token = req.cookies.get('admin_token')?.value
  const valid = process.env.ADMIN_TOKEN
  if (!token || !valid) return false
  return token === valid
}
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname === '/api/leads' || pathname === '/api/book') {
    const ip = req.ip ?? req.headers.get('x-forwarded-for') ?? 'unknown'
    if (isRateLimited(ip)) return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 })
  }
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    if (!isAdminAuthenticated(req)) return NextResponse.redirect(new URL('/admin/login', req.url))
  }
  if (pathname.startsWith('/api/admin/')) {
    if (!isAdminAuthenticated(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return NextResponse.next()
}
export const config = { matcher: ['/api/leads', '/api/book', '/api/admin/:path*', '/admin/:path*'] }
