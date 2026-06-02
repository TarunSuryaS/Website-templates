import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar, MapPin, Shield, Star, Clock, AlertTriangle } from 'lucide-react'
import { CLINIC_NAME, PHONE_NUMBER, MAPS_URL, handleActionClick } from '../constants'

function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-slate-50">
      
      {/* Background Gradients / Decorative Mesh Blur */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 -z-10 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 md:space-y-8 text-left"
          >
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 bg-clinicTeal/10 text-clinicTeal px-4 py-1.5 rounded-full text-sm font-bold border border-clinicTeal/10">
              <span className="w-2.5 h-2.5 rounded-full bg-clinicTeal animate-pulse-glow" />
              <span>Patient-Friendly Family Clinic</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Trusted Dental Care for <span className="text-gradient">Healthy Smiles</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              {CLINIC_NAME} provides patient-friendly dental care for tooth pain, dental cleaning, root canal treatment, gum problems, cosmetic dentistry, and family dental needs.
            </p>

            {/* CTA Buttons Grid */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* Primary Call */}
              <a
                href={`tel:${PHONE_NUMBER || ''}`}
                onClick={(e) => handleActionClick(e, 'tel', PHONE_NUMBER)}
                className="flex items-center space-x-2.5 px-7 py-4 rounded-2xl bg-gradient-teal-blue text-white font-bold shadow-xl shadow-clinicTeal/20 hover:brightness-105 hover:-translate-y-0.5 transition-all text-center"
              >
                <Phone className="w-5 h-5 fill-white/10" />
                <span>Call Now</span>
              </a>

              {/* Secondary Book */}
              <button
                onClick={() => handleScrollTo('#book')}
                className="flex items-center space-x-2.5 px-7 py-4 rounded-2xl bg-white text-slate-700 font-bold border border-slate-200 shadow-md shadow-slate-100 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-5 h-5 text-clinicTeal" />
                <span>Book Appointment</span>
              </button>

              {/* Directions CTA */}
              <a
                href={MAPS_URL || '#'}
                onClick={(e) => handleActionClick(e, 'maps', MAPS_URL)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-4 rounded-2xl bg-sky-50 text-clinicSky font-semibold hover:bg-sky-100/80 transition-colors"
              >
                <MapPin className="w-4.5 h-4.5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Local Context Badges */}
            <div className="pt-4 flex items-center space-x-6 text-sm text-slate-500 border-t border-slate-100">
              <span className="flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-clinicTeal" />
                <span className="font-semibold">Comfortable Care</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-semibold">Trusted Local Dentist</span>
              </span>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative w-full h-[420px] md:h-[500px] rounded-3xl p-2 shadow-2xl bg-white flex flex-col justify-between overflow-hidden border border-slate-100">
              <img 
                src="/hero.png" 
                alt={CLINIC_NAME} 
                className="w-full h-full object-cover rounded-2xl" 
              />
              
              {/* Floating Card 1: Tooth Pain Relief */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 -left-4 glass-card p-3 rounded-2xl flex items-center space-x-2.5 shadow-lg border border-white/80 backdrop-blur-md bg-white/80"
              >
                <div className="w-8.5 h-8.5 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                  <AlertTriangle className="w-4.5 h-4.5 animate-pulse" />
                </div>
                <div className="text-left pr-2">
                  <h5 className="font-bold text-xs text-slate-800">Tooth Pain Relief</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">Immediate Relief</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Root Canal Treatment */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-28 -right-4 glass-card p-3 rounded-2xl flex items-center space-x-2.5 shadow-lg border border-white/80 backdrop-blur-md bg-white/80"
              >
                <div className="w-8.5 h-8.5 rounded-xl bg-teal-50 flex items-center justify-center text-clinicTeal">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                    <path d="M12 6v12M6 12h12"/>
                  </svg>
                </div>
                <div className="text-left pr-2">
                  <h5 className="font-bold text-xs text-slate-800">Root Canal Care</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">Tooth-Saving Care</p>
                </div>
              </motion.div>

              {/* Floating Card 3: Teeth Cleaning */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-52 -left-6 glass-card p-3 rounded-2xl flex items-center space-x-2.5 shadow-lg border border-white/80 backdrop-blur-md bg-white/80"
              >
                <div className="w-8.5 h-8.5 rounded-xl bg-sky-50 flex items-center justify-center text-clinicSky">
                  <Star className="w-4.5 h-4.5 fill-sky-100" />
                </div>
                <div className="text-left pr-2">
                  <h5 className="font-bold text-xs text-slate-800">Teeth Cleaning</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">Scaling & Polishing</p>
                </div>
              </motion.div>

              {/* Floating Card 4: Family Dental Care */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                className="absolute bottom-20 -right-6 glass-card p-3 rounded-2xl flex items-center space-x-2.5 shadow-lg border border-white/80 backdrop-blur-md bg-white/80"
              >
                <div className="w-8.5 h-8.5 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <div className="text-left pr-2">
                  <h5 className="font-bold text-xs text-slate-800">Family Dental Care</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">All Ages Welcome</p>
                </div>
              </motion.div>

              {/* Floating Card 5: Smile Care */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-4 -left-2 glass-card p-3 rounded-2xl flex items-center space-x-2.5 shadow-lg border border-white/80 backdrop-blur-md bg-white/80"
              >
                <div className="w-8.5 h-8.5 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div className="text-left pr-2">
                  <h5 className="font-bold text-xs text-slate-800">Smile Care</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">Aesthetic Care</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Hero
