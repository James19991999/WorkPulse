'use client';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-blue-200 font-medium">Loading WorkPulse...</p>
      </div>
    </div>
  );
}
