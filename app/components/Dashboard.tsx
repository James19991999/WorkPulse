'use client';

import React from 'react';
import { useAuth } from '../context/AuthContext';

export function Dashboard() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">WorkPulse</h1>
            <p className="text-sm text-slate-400">Hybrid Work Analytics</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-white">
                {user?.displayName || user?.email}
              </p>
              <p className="text-xs text-slate-500">Employee</p>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Metric Cards */}
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-slate-400 font-medium">Presence Status</p>
                <p className="text-2xl font-bold text-white mt-1">In Office</p>
              </div>
              <span className="text-3xl">🏢</span>
            </div>
            <div className="flex items-center text-sm text-green-400">
              <span>● Active today</span>
            </div>
          </div>

          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-slate-400 font-medium">Collaboration Score</p>
                <p className="text-2xl font-bold text-white mt-1">78%</p>
              </div>
              <span className="text-3xl">🤝</span>
            </div>
            <div className="flex items-center text-sm text-green-400">
              <span>↑ 5% vs last week</span>
            </div>
          </div>

          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-slate-400 font-medium">Focus Hours</p>
                <p className="text-2xl font-bold text-white mt-1">5.2h</p>
              </div>
              <span className="text-3xl">⏱️</span>
            </div>
            <div className="flex items-center text-sm text-green-400">
              <span>↑ 0.5h vs yesterday</span>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Weekly Overview</h2>
            <div className="space-y-3">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
                <div key={day} className="flex items-center gap-3">
                  <div className="text-sm text-slate-400 w-20">{day}</div>
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      style={{ width: `${70 + i * 5}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-slate-400">{70 + i * 5}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition text-sm">
                📊 View Analytics
              </button>
              <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition text-sm">
                ⚙️ Settings
              </button>
              <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition text-sm">
                📁 View Reports
              </button>
              <button className="w-full p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition text-sm">
                💬 Get Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
