import React from 'react'
import { ArrowRight } from 'lucide-react'
import DashboardPreview from './DashboardPreview'

export default function Hero(){
  return (
    <section aria-labelledby="hero-heading" className="pt-12 lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 fade-up" style={{animationDelay: '80ms'}}>
            Ship better software. See the whole picture.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            FlowForge gives engineering teams one focused workspace for planning work, understanding project health, and staying ahead of delivery.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#showcase" className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white rounded-lg shadow-md hover:shadow-lg transition focus-ring fade-up" style={{animationDelay: '160ms'}}>Explore FlowForge <ArrowRight size={16} /></a>
            <a href="#how" className="text-sm text-slate-700 underline-offset-2 hover:underline focus-ring fade-up" style={{animationDelay: '200ms'}}>See how it works</a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-600">
            <li><strong className="text-slate-900">Unified workspace</strong> for projects and deploys</li>
            <li><strong className="text-slate-900">Realtime signals</strong> for deployments & activity</li>
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-xl border border-slate-100 shadow-subtle overflow-hidden fade-up" style={{animationDelay: '120ms'}}>
            <div className="p-4 bg-white">
              <div className="w-full h-72">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
