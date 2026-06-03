-- Migration 002 - Extended schema
ALTER TABLE leads DROP CONSTRAINT IF EXISTS leads_status_check;
ALTER TABLE leads ADD CONSTRAINT leads_status_check CHECK (status IN ('new','contacted','replied','qualified','booked','sent_to_provider','closed_won','closed_lost'));
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='leads' AND column_name='commission_amount') THEN ALTER TABLE leads ADD COLUMN commission_amount NUMERIC(12,2); END IF; END 
$D;
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='leads' AND column_name='outreach_source') THEN ALTER TABLE leads ADD COLUMN outreach_source TEXT; END IF; END 
)D;
ALTER TABLE lead_events DROP CONSTRAINT IF EXISTS lead_events_event_type_check;
ALTER TABLE lead_events ADD CONSTRAINT lead_events_event_type_check CHECK (event_type IN ('form_submitted','email_sent','call_booked','status_changed','note_added','score_updated','commission_set','outreach_sent','reply_received'));
CREATE OR REPLACE VIEW lead_summary AS SELECT qualification_tier,status,COUNT(*) AS count,SUM(commission_amount) AS total_commission,MIN(created_at)::DATE AS earliest,MAX(created_at)::DATE ASlatest FROM leads GROUP BY qualification_tier,status ORDER BY qualification_tier,status;