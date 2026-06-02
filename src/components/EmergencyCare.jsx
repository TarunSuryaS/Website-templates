import React from 'react'
import { motion } from 'framer-motion'
import { Phone, AlertCircle, Clock } from 'lucide-react'

function EmergencyCare() {
  const whatsappUrl = "https://wa.me/919962468076?text=URGENT:%20I%20have%20severe%20tooth%20pain/swelling%20and%20need%20immediate%20dental%20assistance."

  return (
    <div className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-dark-radial text-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Decorative mesh background highlights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl -translate-y-12 translate-x-12" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-clinicTeal/15 rounded-full blur-3xl translate-y-12 -translate-x-12" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
            
            {/* Urgency Pulsating Pill */}
            <div className="inline-flex items-center space-x-2.5 bg-rose-500/20 text-rose-300 px-4 py-1.5 rounded-full text-xs font-extrabold border border-rose-500/20 uppercase tracking-widest animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span>24/7 Dental Emergency Active</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
              Severe Tooth Pain? Get Emergency Dental Help
            </h2>

            {/* Sub-text */}
            <p className="text-slate-300 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
              If you have sudden tooth pain, swelling, bleeding gums, broken tooth, or dental injury, contact the clinic immediately for guidance.
            </p>

            {/* Emergency Action Buttons Grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md pt-2">
              
              {/* Call Emergency Now */}
              <a
                href="tel:+919962468076"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-base shadow-xl shadow-rose-500/20 hover:shadow-rose-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                <Phone className="w-5 h-5 fill-white/10" />
                <span>Call Emergency Now</span>
              </a>

              {/* WhatsApp Emergency Assistance */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.923 9.923 0 0 0 4.808 1.24c5.505 0 9.99-4.478 9.99-9.984C22.007 6.478 17.518 2 12.012 2zm5.836 14.199c-.32.9-1.845 1.748-2.54 1.81-.63.056-1.442.274-4.226-.879-3.558-1.47-5.828-5.068-6.006-5.305-.178-.236-1.444-1.92-1.444-3.666 0-1.747.907-2.607 1.227-2.927.32-.32.707-.4.942-.4.236 0 .47.001.676.01.213.01.5.02.774.68.284.68.96 2.33 1.042 2.5.082.17.137.369.02.6-.118.23-.178.37-.356.577-.177.206-.373.46-.533.618-.178.175-.365.366-.157.72.207.354.922 1.523 1.977 2.464 1.36 1.213 2.505 1.587 2.86 1.746.356.16.562.13.774-.11.213-.242.924-1.077 1.173-1.443.249-.367.498-.306.837-.184.339.123 2.155 1.014 2.528 1.2.373.187.623.28.712.433.09.153.09 1.09-.23 1.99z"/>
                </svg>
                <span>WhatsApp Now</span>
              </a>

            </div>

            {/* Quick Microcopy Tag */}
            <div className="pt-4 flex items-center space-x-2 text-xs font-bold text-slate-400">
              <Clock className="w-4 h-4 text-clinicTeal" />
              <span>Average response time under 2 minutes • Call now for tooth pain support</span>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default EmergencyCare
