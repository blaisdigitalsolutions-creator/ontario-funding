# Setup & Deployment Guide

## Prerequisites
- Node.js 20+, npm, Supabase account (free), Vercel account (free), Resend account (free), GitHub account

---

## Step 1 - Clone and install

```bash
git init && git add . && git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ontario-funding.git
git push -u origin main
npm install
```

## Step 2 - Supabase setup

1. Go to supabase.com -> New project (Canada East region)
2. SQL Editor -> run `supabase/schema.sql` - creates tables, indexes, and RLS policies
3. SQL Editor -> run `supabase/migrations/002_extended_schema.sql` - extends lead statuses, adds commission and outreach columns. Must run both in order.
4. Project Settings -> API -> copy:
   - Project URL -> NEXT_PUBLIC_SUPABASE_URL
   - service_role key -> SUPABASE_SERVICE_ROLE_KEY

## Step 3 - Resend setup

1. Go to resend.com -> Create account
2. API Keys -> Create key -> copy to RESEND_API_KEY
3. Set INTERNAL_NOTIFICATION_EMAIL to your receiving email

## Step 4 - Local development

```bash
cp .env.example .env.local
npm run dev
```

## Step 5 - Vercel deployment

1. vercel.com -> New Project -> Import from GitHub
2. Framework: Next.js (auto-detected)
3. Add all environment variables from .env.example
4. Deploy

## Admin dashboard
- Access at: /admin
- Password = value of ADMIN_TOKEN env var
- Set ADMIN_TOKEN to a long random string
