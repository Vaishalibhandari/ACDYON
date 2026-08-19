import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-bold text-accent">FlowForge</div>
          <div className="text-sm text-slate-600 mt-2">Ship better software without losing sight of the work.</div>
        </div>
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} FlowForge. All rights reserved.</div>
      </div>
    </footer>
  )
}
