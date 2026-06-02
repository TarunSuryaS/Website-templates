import React from 'react'
import { Phone, MessageSquare } from 'lucide-react'

function StickyActions() {
  // Custom encoded WhatsApp message
  const whatsappUrl = "https://wa.me/919962468076?text=Hi%20El-Shaddai%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment."

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent">
      <div className="glass-card p-2 rounded-2xl flex items-center justify-between gap-3 shadow-2xl border border-white/80">
        
        {/* Call Now Action */}
        <a
          href="tel:+919962468076"
          className="flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-gradient-teal-blue text-white font-bold shadow-lg shadow-clinicTeal/20 hover:brightness-105 active:scale-95 transition-all text-center"
        >
          <Phone className="w-5 h-5 fill-white/20" />
          <span className="text-[15px] tracking-wide">Call Now</span>
        </a>

        {/* WhatsApp Enquire Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 active:scale-95 transition-all text-center"
        >
          {/* SVG WhatsApp Logo */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5"
          >
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.923 9.923 0 0 0 4.808 1.24c5.505 0 9.99-4.478 9.99-9.984C22.007 6.478 17.518 2 12.012 2zm5.836 14.199c-.32.9-1.845 1.748-2.54 1.81-.63.056-1.442.274-4.226-.879-3.558-1.47-5.828-5.068-6.006-5.305-.178-.236-1.444-1.92-1.444-3.666 0-1.747.907-2.607 1.227-2.927.32-.32.707-.4.942-.4.236 0 .47.001.676.01.213.01.5.02.774.68.284.68.96 2.33 1.042 2.5.082.17.137.369.02.6-.118.23-.178.37-.356.577-.177.206-.373.46-.533.618-.178.175-.365.366-.157.72.207.354.922 1.523 1.977 2.464 1.36 1.213 2.505 1.587 2.86 1.746.356.16.562.13.774-.11.213-.242.924-1.077 1.173-1.443.249-.367.498-.306.837-.184.339.123 2.155 1.014 2.528 1.2.373.187.623.28.712.433.09.153.09 1.09-.23 1.99z"/>
          </svg>
          <span className="text-[15px] tracking-wide">WhatsApp</span>
        </a>

      </div>
    </div>
  )
}

export default StickyActions
