import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json() as { password?: string }
  const validToken   = process.env.ADMIN_TOKEN
  if (!validToken) return NextResponse.json({ error: 'Admin not configured' }, { status: 500 })
  if (!password || password !== validToken) return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  const res = NextResponse.json({ success: true })
  res.cookies.set('admin_token', validToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 60 * 60 * 24 * 7, path: '/' })
  return res
}

export async function DELETE(_req: NextRequest) {
  const res = NextResponse.json({ success: true })
  res.cookies.delete('admin_token')
  return res
}
