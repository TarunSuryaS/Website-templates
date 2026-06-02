import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Calendar, Compass, Clock } from 'lucide-react'

function Contact() {
  const whatsappUrl = "https://wa.me/919962468076?text=Hi%20El-Shaddai%20Dental,%20I'd%20like%20to%20get%20directions%20or%20confirm%20your%20clinic%20location."
  const mapsUrl = "https://maps.google.com/?q=El-Shaddai+Dental+Clinic+Implant+Center+Kolathur+Chennai"

  return (
    <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-clinicTeal/10 text-clinicTeal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Find Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Our Location & Contact Details
          </h2>
          <p className="text-slate-500 font-medium text-base sm:text-lg">
            We are centrally located in Kolathur, Chennai. Drop by for a consultation or connect with us instantly online.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Clinic Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left"
          >
            {/* Contact details list */}
            <div className="space-y-6">
              <div>
                <h3 className="font-extrabold text-slate-900 text-2xl tracking-tight leading-snug">
                  El-Shaddai Dental Clinic & Implant Center
                </h3>
                <p className="text-sm font-bold text-clinicTeal mt-1">
                  “24 Hours Affordable Dental Care”
                </p>
              </div>

              <div className="space-y-5">
                {/* Location item */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-clinicTeal shrink-0 border border-teal-100/50">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">Clinic Address</span>
                    <p className="font-bold text-slate-700 text-sm mt-0.5 leading-relaxed">
                      Kolathur, Chennai, Tamil Nadu, India.
                    </p>
                    <span className="text-xs text-slate-400 font-semibold block mt-0.5">Located inside a prime neighborhood zone</span>
                  </div>
                </div>

                {/* Phone item */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-clinicSky shrink-0 border border-sky-100/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">Phone Contact</span>
                    <a href="tel:+919962468076" className="font-extrabold text-slate-800 text-lg hover:text-clinicTeal transition-colors block mt-0.5">
                      +91 99624 68076
                    </a>
                    <span className="text-xs text-slate-400 font-semibold block mt-0.5">Toll-free demo clinic contact line</span>
                  </div>
                </div>

                {/* Timing item */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 border border-emerald-100/50">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">Operating Hours</span>
                    <p className="font-bold text-slate-700 text-sm mt-0.5">
                      24 Hours / 7 Days a week active
                    </p>
                    <span className="text-xs text-slate-400 font-semibold block mt-0.5">Includes late night emergency support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Buttons row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100/60">
              
              {/* Call Now */}
              <a
                href="tel:+919962468076"
                className="flex items-center justify-center space-x-1.5 py-3.5 px-4 rounded-xl bg-gradient-teal-blue text-white font-extrabold text-xs shadow-md shadow-clinicTeal/15 hover:brightness-105 active:scale-95 transition-all text-center"
              >
                <Phone className="w-4 h-4 fill-white/10" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 py-3.5 px-4 rounded-xl bg-emerald-550 text-white font-extrabold text-xs shadow-md shadow-emerald-500/10 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.923 9.923 0 0 0 4.808 1.24c5.505 0 9.99-4.478 9.99-9.984C22.007 6.478 17.518 2 12.012 2zm5.836 14.199c-.32.9-1.845 1.748-2.54 1.81-.63.056-1.442.274-4.226-.879-3.558-1.47-5.828-5.068-6.006-5.305-.178-.236-1.444-1.92-1.444-3.666 0-1.747.907-2.607 1.227-2.927.32-.32.707-.4.942-.4.236 0 .47.001.676.01.213.01.5.02.774.68.284.68.96 2.33 1.042 2.5.082.17.137.369.02.6-.118.23-.178.37-.356.577-.177.206-.373.46-.533.618-.178.175-.365.366-.157.72.207.354.922 1.523 1.977 2.464 1.36 1.213 2.505 1.587 2.86 1.746.356.16.562.13.774-.11.213-.242.924-1.077 1.173-1.443.249-.367.498-.306.837-.184.339.123 2.155 1.014 2.528 1.2.373.187.623.28.712.433.09.153.09 1.09-.23 1.99z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Get Directions */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 py-3.5 px-4 rounded-xl bg-sky-50 text-clinicSky font-extrabold text-xs hover:bg-sky-100/80 active:scale-95 transition-all text-center"
              >
                <Compass className="w-4 h-4" />
                <span>Directions</span>
              </a>

            </div>
          </motion.div>

          {/* Right Column: Embedded Google Maps Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex"
          >
            <div className="relative w-full min-h-[300px] bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between p-6 shadow-md shadow-slate-100 group">
              
              {/* Graphic Mock Map Backdrop (Using clinical map design layout via CSS styling) */}
              <div className="absolute inset-0 bg-slate-50 opacity-40 -z-10 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/40 via-teal-50/20 to-slate-200/50 -z-20 pointer-events-none" />
              <div className="absolute top-1/3 left-1/4 w-[2px] h-[300px] bg-slate-200 -z-10 rotate-12 pointer-events-none" />
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -z-10 -rotate-6 pointer-events-none" />

              {/* Map Centering Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                {/* Ping glow ring */}
                <div className="w-12 h-12 rounded-full bg-rose-500/20 absolute -z-10 animate-ping" />
                <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-xl shadow-rose-500/30">
                  <MapPin className="w-4 h-4 fill-rose-500/20" />
                </div>
                <div className="bg-slate-900 text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border border-slate-800 mt-2 block whitespace-nowrap">
                  El-Shaddai Dental
                </div>
              </div>

              {/* Top Banner overlay */}
              <div className="glass-card p-4 rounded-2xl border border-white/80 w-full max-w-sm text-left shadow-lg shrink-0">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Google Maps Placeholder</span>
                <p className="text-xs text-slate-600 font-semibold mt-1 leading-relaxed">
                  Google Maps location will be added here upon clinic address confirmation.
                </p>
              </div>

              {/* Bottom directions link */}
              <div className="flex justify-end w-full mt-auto">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 shadow-md font-bold text-xs transition-colors shrink-0"
                >
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Contact
