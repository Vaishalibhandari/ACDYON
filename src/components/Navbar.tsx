import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#home" className="text-accent font-bold text-lg focus-ring">FlowForge</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700" aria-label="Primary">
            <a href="#product" className="hover:text-slate-900 focus-ring">Product</a>
            <a href="#solutions" className="hover:text-slate-900 focus-ring">Solutions</a>
            <a href="#resources" className="hover:text-slate-900 focus-ring">Resources</a>
            <a href="#pricing" className="hover:text-slate-900 focus-ring">Pricing</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block text-sm">
            <a href="#login" className="mr-4 hover:text-slate-900 focus-ring">Login</a>
            <a className="px-3 py-2 bg-accent text-white rounded-md shadow-sm focus-ring" href="#signup">Get started</a>
          </div>
          {/* Mobile: keep primary CTA accessible */}
          <a href="#signup" className="md:hidden px-3 py-2 bg-accent text-white rounded-md shadow-sm mr-2 focus-ring">Get started</a>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="md:hidden p-2 rounded-md focus-ring">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#product" className="py-2 focus-ring">Product</a>
            <a href="#solutions" className="py-2 focus-ring">Solutions</a>
            <a href="#resources" className="py-2 focus-ring">Resources</a>
            <a href="#pricing" className="py-2 focus-ring">Pricing</a>
            <a href="#login" className="py-2 focus-ring">Login</a>
            <a href="#signup" className="py-2 px-3 bg-accent text-white rounded focus-ring">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}
