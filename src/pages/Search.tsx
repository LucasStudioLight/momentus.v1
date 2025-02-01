import React, { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { EntryList } from '../components/EntryList'

export function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    if (!query.trim()) return

    try {
      const { data, error } = await supabase
        .from('entries')
        .select('*')
        .textSearch('content', query)
        .order('created_at', { ascending: false })

      if (error) throw error
      setResults(data || [])
    } catch (error) {
      console.error('Error searching entries:', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your entries..."
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <SearchIcon size={20} />
        </button>
      </div>
      
      {results.length > 0 && <EntryList entries={results} />}
    </div>
  )
}
