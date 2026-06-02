import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Info, MapPin, Calendar, Clock } from 'lucide-react'
import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_TIMINGS, handleActionClick } from '../constants'

function About() {
  const coreValues = [
    "Affordable treatment structures",
    "Comfortable, patient-first room design",
    "Sterilized, surgical-grade tools",
    "Friendly call & WhatsApp support"
  ]

  return (
    <div className="bg-gradient-soft py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission, Content and Custom Advisory Note */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 md:space-y-8 text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-clinicTeal/10 text-clinicTeal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              About {CLINIC_NAME}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {CLINIC_NAME} is a dental care clinic focused on providing comfortable, reliable, and affordable dental treatment. The clinic helps patients with tooth pain, gum problems, teeth cleaning, root canal treatment, wisdom tooth issues, cosmetic dentistry, and general oral health care.
            </p>

            {/* Checked features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {coreValues.map((val, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{val}</span>
                </div>
              ))}
            </div>

            {/* Professional Demo Disclaimer Note */}
            <div className="glass-card p-5 rounded-2xl border-l-4 border-l-clinicTeal bg-white/90 flex items-start space-x-3.5 shadow-sm mt-4">
              <div className="w-9 h-9 rounded-xl bg-clinicTeal/10 flex items-center justify-center text-clinicTeal shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-extrabold text-slate-800 text-sm block">Clinic Demo Notice</span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Doctor name, exact address, timings, phone number, and treatment pricing can be updated after clinic confirmation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Info Card Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/90 shadow-xl text-left relative overflow-hidden bg-white/70">
              {/* Absolutes */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-clinicSky/10 rounded-full blur-xl translate-x-8 -translate-y-8" />
              
              <h3 className="font-extrabold text-slate-900 text-xl tracking-tight mb-6 flex items-center space-x-2">
                <span>Clinic Highlights</span>
              </h3>

              <div className="space-y-6">
                {/* Highlight 1: Timings */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-clinicTeal shrink-0 border border-teal-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Timings</span>
                    <span className="font-extrabold text-slate-800 text-sm block mt-0.5">
                      {CLINIC_TIMINGS || "Add clinic timings here after confirmation"}
                    </span>
                    <span className="text-xs text-slate-500 font-medium mt-0.5 block">Timings will be updated post-approval</span>
                  </div>
                </div>

                {/* Highlight 2: Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-clinicSky shrink-0 border border-sky-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Primary Location</span>
                    <span className="font-extrabold text-slate-800 text-sm block mt-0.5">
                      {CLINIC_ADDRESS || "Add clinic address here after confirmation"}
                    </span>
                    <span className="text-xs text-slate-500 font-medium mt-0.5 block">Exact map details will be integrated</span>
                  </div>
                </div>

                {/* Highlight 3: Care Standard */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Standard of Safety</span>
                    <span className="font-extrabold text-slate-800 text-sm block mt-0.5">100% Sterile Environment</span>
                    <span className="text-xs text-slate-500 font-medium mt-0.5 block">Surgical-grade sterilization protocols</span>
                  </div>
                </div>
              </div>

              {/* Sub-CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href="#contact"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>View Location & Contact Details</span>
                  <span>&rarr;</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default About
