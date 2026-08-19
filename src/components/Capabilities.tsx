import React from 'react'

function Card({title, desc, children}:{title:string; desc:string; children:React.ReactNode}){
  return (
    <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

export default function Capabilities(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Plan with clarity" desc="Turn projects into clear, trackable work.">
        <div className="h-20 bg-slate-50 rounded p-2 text-xs">Roadmap lanes · Priorities · Milestones</div>
      </Card>
      <Card title="Understand project health" desc="See what is moving, blocked, or falling behind.">
        <div className="h-20 bg-slate-50 rounded p-2 text-xs">Health indicators · Blockers · Signals</div>
      </Card>
      <Card title="Stay ahead of delivery" desc="Bring engineering activity and deployment signals into one view.">
        <div className="h-20 bg-slate-50 rounded p-2 text-xs">Deploy statuses · CI signals · Recent runs</div>
      </Card>
    </div>
  )
}
