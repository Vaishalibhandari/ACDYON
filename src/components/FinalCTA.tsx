import React from 'react'

export default function FinalCTA(){
  return (
    <div className="bg-gradient-to-r from-white to-slate-50 rounded-xl border border-slate-100 p-8 text-center">
      <h2 className="text-2xl font-semibold">Ready to see FlowForge in action?</h2>
      <p className="mt-2 text-slate-600">Start a trial or schedule a short walkthrough with our team.</p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <a className="px-6 py-3 bg-accent text-white rounded-lg" href="#signup">Start free trial</a>
        <a className="px-4 py-2 border rounded" href="#contact">Request demo</a>
      </div>
    </div>
  )
}
