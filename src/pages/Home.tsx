import React, { useEffect, useState } from 'react'
import { EntryForm } from '../components/EntryForm'
import { EntryList } from '../components/EntryList'
import { supabase } from '../lib/supabase'

export function Home() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetchEntries()
    
    const subscription = supabase
      .channel('entries')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'entries' }, fetchEntries)
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const fetchEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('entries')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setEntries(data || [])
    } catch (error) {
      console.error('Error fetching entries:', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <EntryForm />
      <EntryList entries={entries} />
    </div>
  )
}
