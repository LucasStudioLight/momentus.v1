import React, { useState } from 'react'
import { Camera, Mic, Send } from 'lucide-react'
import { supabase } from '../lib/supabase'

export function EntryForm() {
  const [content, setContent] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return
    
    try {
      const { data, error } = await supabase
        .from('entries')
        .insert([{ content }])
        
      if (error) throw error
      setContent('')
    } catch (error) {
      console.error('Error creating entry:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-4 border rounded-lg"
        rows={4}
      />
      
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button type="button" className="p-2 rounded-full hover:bg-gray-100">
            <Camera size={24} />
          </button>
          <button
            type="button"
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setIsRecording(!isRecording)}
          >
            <Mic size={24} className={isRecording ? 'text-red-500' : ''} />
          </button>
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          disabled={!content.trim()}
        >
          <Send size={20} />
          <span>Save</span>
        </button>
      </div>
    </form>
  )
}
