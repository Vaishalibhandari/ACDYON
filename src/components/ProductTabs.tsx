import React, { useState } from 'react'

export default function ProductTabs(){
  const tabs = ['Overview','Sprint','Deployments','Activity']
  const [active, setActive] = useState(0)

  return (
    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-subtle">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Explore the product</h3>
        <div className="space-x-2" role="tablist" aria-label="Product tabs">
          {tabs.map((t,i)=> (
            <button key={t} role="tab" aria-selected={active===i} onClick={() => setActive(i)} className={`px-3 py-1 rounded ${active===i? 'bg-accent text-white':'text-slate-600'} focus-ring`}>{t}</button>
          ))}
        </div>
      </div>

      <div className="mt-6 transition-all duration-300">
        {active === 0 && <div className="text-sm text-slate-600 fade-up" style={{animationDelay: '40ms'}}>An at-a-glance view to assess project progress, recent deployments, and outstanding reviews.</div>}
        {active === 1 && <div className="text-sm text-slate-600 fade-up" style={{animationDelay: '40ms'}}>Track sprint commitments and see where attention is needed to keep delivery smooth.</div>}
        {active === 2 && <div className="text-sm text-slate-600 fade-up" style={{animationDelay: '40ms'}}>Deployment history, current status, and quick rollbacks — all in one place.</div>}
        {active === 3 && <div className="text-sm text-slate-600 fade-up" style={{animationDelay: '40ms'}}>Activity feed with commits, PRs, and CI signals to help spot regressions early.</div>}
      </div>
    </div>
  )
}
