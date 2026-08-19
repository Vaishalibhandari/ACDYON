import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Capabilities from './components/Capabilities'
import ProductTabs from './components/ProductTabs'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  const [konami, setKonami] = useState(false)

  useEffect(() => {
    let seq: number[] = []
    const konamiCode = [38,38,40,40,37,39,37,39,66,65]
    function handler(e: KeyboardEvent) {
      seq.push(e.keyCode)
      if (seq.slice(-konamiCode.length).join(',') === konamiCode.join(',')) {
        setKonami(true)
      }
      if (seq.length > 20) seq = seq.slice(-20)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="min-h-screen text-slate-800 antialiased bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <section aria-labelledby="showcase" className="mt-12">
          <DashboardPreview />
        </section>
        <section className="mt-20">
          <Capabilities />
        </section>
        <section className="mt-20">
          <ProductTabs />
        </section>
        <section className="mt-20">
          <FinalCTA />
        </section>
      </main>
      <Footer />

      {konami && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-8 shadow-lg w-11/12 max-w-xl">
            <h3 className="text-xl font-semibold">FlowForge: Dev Mode</h3>
            <p className="mt-2 text-sm text-slate-600">You found the hidden developer state. Nice work.</p>
            <div className="mt-4 text-right">
              <button onClick={() => setKonami(false)} className="px-4 py-2 bg-accent text-white rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
