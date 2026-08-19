import React, { useState } from 'react'

function Stat({label, value, delay}:{label:string; value:React.ReactNode; delay?:number}){
  return (
    <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm" style={{animationDelay: `${delay||0}ms`}}>
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-semibold text-slate-900">{value}</div>
    </div>
  )
}

export default function DashboardPreview(){
  const [view, setView] = useState<'overview'|'sprint'|'deployments'|'activity'>('overview')

  return (
    <div className="fade-in grid grid-cols-1 lg:grid-cols-12 gap-6">
      <aside className="lg:col-span-3 bg-white rounded-xl border border-slate-100 p-4 shadow-subtle order-1 lg:order-none">
        <div className="text-sm font-semibold mb-4">Projects</div>
        <ul className="space-y-2 text-sm">
          <li className="px-3 py-2 rounded-md bg-slate-50">Website Revamp <span className="text-xs text-slate-400">• Active</span></li>
          <li className="px-3 py-2 rounded-md">Mobile SDK</li>
          <li className="px-3 py-2 rounded-md">Platform</li>
        </ul>
      </aside>

      <div className="lg:col-span-9 grid grid-cols-1 gap-4 stagger">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm font-semibold">Project Overview</div>
            <div className="text-xs text-slate-500">FlowForge • Website Revamp</div>
          </div>
          <div className="flex items-center gap-2" role="tablist" aria-label="Product views">
            <button role="tab" aria-selected={view==='overview'} onClick={() => setView('overview')} className={`px-3 py-1 rounded ${view==='overview'?'bg-accent text-white':'text-slate-600'} focus-ring`}>Overview</button>
            <button role="tab" aria-selected={view==='sprint'} onClick={() => setView('sprint')} className={`px-3 py-1 rounded ${view==='sprint'?'bg-accent text-white':'text-slate-600'} focus-ring`}>Sprint</button>
            <button role="tab" aria-selected={view==='deployments'} onClick={() => setView('deployments')} className={`px-3 py-1 rounded ${view==='deployments'?'bg-accent text-white':'text-slate-600'} focus-ring`}>Deploys</button>
            <button role="tab" aria-selected={view==='activity'} onClick={() => setView('activity')} className={`px-3 py-1 rounded ${view==='activity'?'bg-accent text-white':'text-slate-600'} focus-ring`}>Activity</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Stat label="Open tasks" value={42} delay={80} />
          <Stat label="In review" value={7} delay={160} />
          <Stat label="Blocked" value={<span className="text-amber-600">3</span>} delay={240} />
        </div>

        <div className="bg-white rounded-lg border border-slate-100 p-4 shadow-subtle">
          {view === 'overview' && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold">Sprint progress</div>
                <div className="text-xs text-slate-500">3 of 5 milestones</div>
              </div>
              <div className="w-full bg-slate-100 rounded h-3">
                <div className="h-3 rounded bg-accent" style={{width: '60%'}} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded">
                  <div className="text-xs text-slate-500">Last deploy</div>
                  <div className="text-sm font-medium">Main → prod · 10m ago</div>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <div className="text-xs text-slate-500">Recent activity</div>
                  <div className="text-sm">4 pushes, 2 PRs</div>
                </div>
              </div>
            </div>
          )}

          {view === 'sprint' && (
            <div>
              <div className="text-sm font-semibold mb-2">Active sprint</div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between"><div>Implement auth</div><div className="text-xs text-slate-500">In progress</div></li>
                <li className="flex items-center justify-between"><div>Landing page</div><div className="text-xs text-slate-500">Review</div></li>
                <li className="flex items-center justify-between"><div>API rate limits</div><div className="text-xs text-emerald-600">Done</div></li>
              </ul>
            </div>
          )}

          {view === 'deployments' && (
            <div>
              <div className="text-sm font-semibold mb-2">Deployments</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 rounded bg-slate-50 border">prod · success · 10m ago</div>
                <div className="p-3 rounded bg-slate-50 border">staging · failed · 1h ago</div>
              </div>
            </div>
          )}

          {view === 'activity' && (
            <div>
              <div className="text-sm font-semibold mb-2">Recent activity</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>J. opened PR #324</li>
                <li>M. pushed to feature/ux</li>
                <li>Auto-deploy: main → prod</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
