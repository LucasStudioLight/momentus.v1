import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Book, Calendar, Search, Settings } from 'lucide-react'

export function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b p-4">
        <h1 className="text-2xl font-bold">Daily Moments Journal</h1>
      </header>
      
      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
      
      <nav className="bg-white border-t p-4">
        <div className="flex justify-around">
          <Link to="/" className="flex flex-col items-center">
            <Book size={24} />
            <span>Journal</span>
          </Link>
          <Link to="/calendar" className="flex flex-col items-center">
            <Calendar size={24} />
            <span>Calendar</span>
          </Link>
          <Link to="/search" className="flex flex-col items-center">
            <Search size={24} />
            <span>Search</span>
          </Link>
          <Link to="/settings" className="flex flex-col items-center">
            <Settings size={24} />
            <span>Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
