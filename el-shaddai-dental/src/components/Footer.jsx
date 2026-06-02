import React from 'react'
import { Heart, Activity } from 'lucide-react'

function Footer() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 border-t border-slate-800 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 text-left">
          
          {/* Logo & Tagline Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-teal-blue flex items-center justify-center text-white font-bold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 4v12M6 12h12" />
                </svg>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                El-Shaddai <span className="text-clinicTeal font-medium">Dental</span>
              </span>
            </div>
            <p className="font-extrabold text-sm text-slate-300">
              El-Shaddai Dental Clinic & Implant Center
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-semibold max-w-sm">
              Providing dedicated, 24-hour affordable dental care in Kolathur, Chennai. Trustworthy treatments for families and emergency pain relief.
            </p>
            <span className="inline-flex items-center space-x-1.5 bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Kolathur, Chennai</span>
            </span>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-widest border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <button
                  onClick={() => handleScrollTo('#home')}
                  className="hover:text-clinicTeal transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#about')}
                  className="hover:text-clinicTeal transition-colors text-left"
                >
                  About Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#services')}
                  className="hover:text-clinicTeal transition-colors text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#emergency')}
                  className="hover:text-clinicTeal transition-colors text-left"
                >
                  Emergency Care
                </button>
              </li>
            </ul>
          </div>

          {/* Core Taglines Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-widest border-b border-slate-800 pb-2">
              Our Vision
            </h4>
            <p className="text-xs text-slate-400 italic leading-relaxed font-semibold">
              “24 Hours Affordable Dental Care”
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
              A high-converting demo website designed to showcase digital outreach potential to the clinic owner.
            </p>
          </div>

        </div>

        {/* Copyright divider row */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-500 gap-4 text-center sm:text-left">
          <p>
            &copy; {currentYear} El-Shaddai Dental Clinic & Implant Center. All rights reserved.
          </p>
          <p className="flex items-center space-x-1 justify-center">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for local dental clinics in Chennai</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
