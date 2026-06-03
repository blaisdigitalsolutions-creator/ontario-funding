'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError(null)
    const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) })
    if (res.ok) { router.push('/admin') } else { setError('Invalid password. Try again.'); setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2.5 justify-center mb-10">
          <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13V6l5-4 5 4v7H3z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 13V9h4v4" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          </div>
          <span className="font-display text-lg text-cream-100">Ontario Funding</span>
        </div>
        <div className="bg-navy-800 border border-white/[0.08] rounded-2xl p-8">
          <h1 className="font-display text-display-md text-cream-50 mb-2 text-center">Admin Access</h1>
          <p className="text-sm text-brand-muted text-center mb-8">Internal use only</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-body text-cream-200 mb-1.5">Password</label>
              <input id="password" type="password" className="form-input" placeholder="Enter admin password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" autoFocus required />
            </div>
            {error && <p className="text-sm text-red-400 font-body">{error}</p>}
            <button type="submit" disabled={loading || !password} className="w-full py-3 bg-brand-green hover:bg-brand-green-hover disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-body font-medium rounded-lg transition-colors">
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
