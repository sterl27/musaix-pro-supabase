'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

export default function DashboardClient({ user }: { user: User }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <nav className="border-b border-zinc-900 bg-zinc-950">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Musaix Pro
              </a>
              <div className="hidden md:flex gap-6">
                <a href="/dashboard" className="text-white font-medium">Studio</a>
                <a href="/dashboard/library" className="text-zinc-400 hover:text-white transition">Library</a>
                <a href="/dashboard/projects" className="text-zinc-400 hover:text-white transition">Projects</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-zinc-400 hover:text-white transition">
                🔔
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-sm font-bold">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-zinc-800">
                      <p className="text-sm font-medium">{user.user_metadata?.full_name || 'User'}</p>
                      <p className="text-xs text-zinc-400">{user.email}</p>
                    </div>
                    <button className="w-full text-left px-4 py-2 hover:bg-zinc-800 transition text-sm">
                      Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-zinc-800 transition text-sm">
                      Profile
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-zinc-800 transition text-sm text-red-400"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-900 bg-zinc-950 p-4 overflow-y-auto">
          <div className="mb-6">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
              <span>➕</span> New Project
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Quick Tools</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-900 transition flex items-center gap-3">
                <span>🎹</span> Beat Generator
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-900 transition flex items-center gap-3">
                <span>🎤</span> Record Audio
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-900 transition flex items-center gap-3">
                <span>🎧</span> Mix & Master
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-900 transition flex items-center gap-3">
                <span>📊</span> Analytics
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Recent Projects</h3>
            <div className="space-y-2">
              {["Summer Vibes", "Night Drive", "Trap Beat 001"].map((project, i) => (
                <button key={i} className="w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-900 transition text-sm text-zinc-400">
                  {project}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.user_metadata?.full_name || user.email?.split('@')[0]}!</h1>
              <p className="text-zinc-400">Start creating amazing music today</p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-500">24</div>
                <div className="text-sm text-zinc-400">Total Projects</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-pink-500">156</div>
                <div className="text-sm text-zinc-400">Beats Generated</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-red-500">48h</div>
                <div className="text-sm text-zinc-400">Studio Time</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-orange-500">12</div>
                <div className="text-sm text-zinc-400">Collaborators</div>
              </div>
            </div>

            {/* AI Beat Generator Section */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">AI Beat Generator</h2>
                  <p className="text-zinc-400">Generate professional beats in seconds</p>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition px-6 py-3 rounded-lg font-semibold">
                  Generate Beat
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Genre</label>
                  <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500">
                    <option>Hip Hop</option>
                    <option>Trap</option>
                    <option>R&B</option>
                    <option>Pop</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tempo (BPM)</label>
                  <input 
                    type="number" 
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                    defaultValue="120"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mood</label>
                  <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500">
                    <option>Energetic</option>
                    <option>Chill</option>
                    <option>Dark</option>
                    <option>Happy</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {[
                  { title: "Summer Vibes", date: "2 hours ago", status: "Mixing" },
                  { title: "Night Drive", date: "Yesterday", status: "Complete" },
                  { title: "Trap Beat 001", date: "3 days ago", status: "Draft" },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 flex items-center justify-between hover:border-zinc-700 transition">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-xl">
                        🎵
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-zinc-400">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full">
                        {item.status}
                      </span>
                      <button className="text-zinc-400 hover:text-white transition">▶️</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
