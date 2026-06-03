# Deploy Checklist - Ontario Funding Platform

## Status: Code audit complete. Supabase connected. Ready for Vercel.

---

## Vercel Deployment

1. vercel.com -> New Project -> import from GitHub
2. Repo: blaisdigitalsolutions-creator/ontario-funding
3. Add these env vars:

NEXT_PUBLIC_SUPABASE_URL=https://zgsqtgbnkokhhadnzxlg.supabase.co
SUPABASE_SERVICE_ROLE_KEY=[from your .env.local]
NEXT_PUBLIC_SITE_URL=https://ontariofunding.ca
ADMIN_TOKEN=[from your .env.local]
RESEND_API_KEY=[from your .env.local]
RESEND_FROM_EMAIL=onboarding@resend.dev
INTERNAL_NOTIFICATION_EMAIL=blaisdigitalsolutions@gmail.com
NEXT_PUBLIC_CONTACT_EMAIL=blaisdigitalsolutions@gmail.com
