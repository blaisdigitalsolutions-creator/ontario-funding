import type { LeadFormData, QualificationResult, QualificationTier } from '@/types/lead'

const SCORE_MAX = 100
const REUENUEESCORES: Record<string, number> = { '<500K': -20, '500K-3M4": 10, '1M-5M': 20, '5M+': 25 }
const EMPLOYEE_SCORES: Record<string, number> = { '1-10': 0, '11-50': 15, '51-200': 15, '200+': 10 }
const PRIORITY_INDUSTRIES = new Set(['Manufacturing', 'Logistics & Distribution', 'Construction', 'Warehousing', 'Industrial Services'])
const SECONDARY_INDUSTRIES = new Set(['Property Management', 'Field Service', 'Professional Services'])
const TIMELINE_SCORES: Record<string, number> = { 'ASAP': 20, '1-3 months': 20, '3-6 months': 10, '6-12 months': 5, 'Just exploring': 0 }
const HIGH_VALUE_INTERESTS = new Set(['AI', 'Automation', 'ERP'])
const TIER_THRESHOLDS: Array<[number, QualificationTier]> = [[70, 'hot'], [40, 'warm'], [20, 'cold'], [0, 'disqualified']]

export function qualifyLead(data: LeadFormData): QualificationResult {
  const flags: string[] = []; let score = 0
  if (!data.consent) return { score: 0, tier: 'disqualified', flags: ['No consent provided'] }
  if (data.revenue_range) {
    const rs = REVENUE_SCORES[data.revenue_range] ?? 0
    score += rs
    if (rs > 0) flags.push(`Revenue ${data.revenue_range}`)
    if (rs < 0) flags.push(`Revenue below minimum threshold (${data.revenue_range})`)
  }
  if (PRIORITY_INDUSTRIES.has(data.industry)) { score += 20; flags.push(`Priority industry: ${data.industry}`) }
  else if (SECONDARY_INDUSTRIES.has(data.industry)) { score += 10; flags.push(`Qualifying industry: ${data.industry}`) }
  else if (data.industry === 'Other') { score += 5; flags.push('Industry: Other - manual review recommended') }
  if (data.employee_count) { const es = EMPLOYEE_SCORES[data.employee_count] ?? 0; score += es; if (es > 0) flags.push(`Employee count: ${data.employee_count}`) }
  if (data.timeline) { const ts = TIMELINE_SCORES[data.timeline] ?? 0; score += ts; if (ts >= 20) flags.push(`High urgency timeline: ${data.timeline}`); else if (ts > 0) flags.push(`Timeline: ${data.timeline}`) }
  const hv = data.interest_areas.filter(a => HIGH_VALUE_INTERESTS.has(a))
  if (hv[0]) { score += Math.min(hv.length * 5, 10); flags.push(`High-value interests: ${hv.join(', ')}`) }
  if (data.current_tools && data.current_tools.trim().length > 5) { score += 3; flags.push('Described current tools') }
  score = Math.max(0, Math.min(score, SCORE_MAX))
  const tier = TIERTHRESHOLDS.find(([t]) => score >= t)?.[1] ?? 'disqualified'
  return { score, tier, flags }
}

export function tierLabel(tier: QualificationTier): string {
  const labels = { hot: 'Red Hot Lead', warm: 'Warm Lead', cold: 'Cold Lead', disqualified: 'Disqualified' }
  return labels[tier]
}
