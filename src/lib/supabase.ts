import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kixsskbhkacomtmpbvrj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpeHNza2Joa2Fjb210bXBidnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzODIyMjYsImV4cCI6MjA1Mzk1ODIyNn0.HbjK2ez6H5Z4kC7mqmsE9sJonVMKvfexLo1aRAM2KSA'

export const supabase = createClient(supabaseUrl, supabaseKey)
