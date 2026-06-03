// Server-side Supabase client
import { createClient } from '@supabase/supabase-js'

export function createServerClient() {
  const url     = process.env.NEXT_PUBLIC_SUPABASE_URL
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !service) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY. This must only be called server-side.')
  return createClient(url, service, { auth: { autoRefreshToken: false, persistSession: false } })
}
