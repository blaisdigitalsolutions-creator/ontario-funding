export type RevenueRange = '<500K' | '500K-1M' | '1M-5M' | '5M+'
export type EmployeeCount = '1-10' | '11-50' | '51-200' | '200+'
export type Timeline = 'ASAP' | '1-3 months' | '3-6 months' | '6-12 months' | 'Just exploring'
export type QualificationTier = 'hot' | 'warm' | 'cold' | 'disqualified'
export type LeadStatus = 'new' | 'contacted' | 'replied' | 'qualified' | 'booked' | 'sent_to_provider' | 'closed_won' | 'closed_lost'
export type Bottleneck = 'manual-processes' | 'lack-of-data-visibility' | 'scheduling' | 'inventory' | 'communication' | 'billing-invoicing' | 'other'
export type InterestArea = 'AI' | 'Automation' | 'ERP' | 'CRM' | 'Workflow Software' | 'Equipment Upgrades' | 'Other'
export type Industry = 'Manufacturing' | 'Logistics & Distribution' | 'Construction' | 'Property Management' | 'Warehousing' | 'Industrial Services' | 'Field Service' | 'Professional Services' | 'Other'

export interface LeadFormData {
  company_name: string; industry: Industry | ''; revenue_range: RevenueRange | ''; employee_count: EmployeeCount | ''
  current_tools: string; bottleneck: Bottleneck[]; interest_areas: InterestArea[]
  timeline: Timeline | ''; full_name: string; email: string; phone: string; consent: boolean
}

export const EMPTY_LEAD_FORM: LeadFormData = {
  company_name: '', industry: '', revenue_range: '', employee_count: '', current_tools: '',
  bottleneck: [], interest_areas: [], timeline: '', full_name: '', email: '', phone: '', consent: false
}

export interface QualificationResult { score: number; tier: QualificationTier; flags: string[] }
