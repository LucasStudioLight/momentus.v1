import React from 'react'
import { format } from 'date-fns'

type Entry = {
  id: string
  content: string
  created_at: string
}

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div key={entry.id} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600 text-sm mb-2">
            {format(new Date(entry.created_at), 'PPP')}
          </p>
          <p className="whitespace-pre-wrap">{entry.content}</p>
        </div>
      ))}
    </div>
  )
}
