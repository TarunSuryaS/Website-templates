import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar, MapPin, Shield, Star, Clock, AlertTriangle } from 'lucide-react'

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
              <span>24 Hours Affordable Dental Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Affordable <span className="text-gradient">24-Hour</span> Dental Care in Kolathur
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              El-Shaddai Dental Clinic & Implant Center provides caring, reliable, and affordable dental treatment for families, emergency patients, and implant care seekers.
            </p>

            {/* CTA Buttons Grid */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* Primary Call */}
              <a
                href="tel:+919962468076"
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
                href="https://maps.google.com/?q=El-Shaddai+Dental+Clinic+Implant+Center+Kolathur+Chennai"
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
                <span className="font-semibold">Kolathur, Chennai</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-semibold">Top Rated local care</span>
              </span>
            </div>
          </motion.div>

          {/* Right Visual Column (Interactive HTML Mock UI with floating cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Core Card Graphic */}
            <div className="relative w-full h-[400px] md:h-[450px] bg-gradient-to-br from-clinicTeal/10 to-clinicSky/10 border border-slate-200/60 rounded-3xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Absolutes for visual aesthetics */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-xl translate-x-10 -translate-y-10" />
              
              {/* Doctor Header Mock */}
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white">
                <div className="w-12 h-12 rounded-xl bg-gradient-teal-blue flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Caring Dental Team</h4>
                  <p className="text-xs text-slate-500">Implant & Tooth Pain Care Specialists</p>
                </div>
              </div>

              {/* Graphic Center (Dental Cross/Logo backdrop) */}
              <div className="my-auto flex flex-col items-center justify-center space-y-2 opacity-80">
                <span className="text-6xl">🦷</span>
                <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">El-Shaddai Dental</span>
              </div>

              {/* Patient Trust Quote Card */}
              <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-start space-x-3 border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs shrink-0">
                  ES
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-slate-300 italic">"Painless dental care located right in Kolathur. Highly affordable implant options!"</p>
                  <span className="text-[10px] text-slate-400 font-bold mt-1 block">Local Patient Review</span>
                </div>
              </div>

              {/* Floating Card 1: 24 Hours Care */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-24 -left-6 glass-card p-3 rounded-xl flex items-center space-x-2.5 shadow-lg border border-white/80"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-clinicTeal">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <h5 className="font-bold text-xs text-slate-800">24 Hours Care</h5>
                  <p className="text-[10px] text-slate-500">Always Available</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Dental Implants */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-48 -right-6 glass-card p-3 rounded-xl flex items-center space-x-2.5 shadow-lg border border-white/80"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-clinicSky">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                    <path d="M12 6v12M6 12h12"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h5 className="font-bold text-xs text-slate-800">Dental Implants</h5>
                  <p className="text-[10px] text-slate-500">Permanent Teeth</p>
                </div>
              </motion.div>

              {/* Floating Card 3: Emergency Tooth Pain */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-28 -left-8 glass-card p-3 rounded-xl flex items-center space-x-2.5 shadow-lg border border-white/80"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 animate-pulse">
                  <AlertTriangle className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <h5 className="font-bold text-xs text-slate-800">Emergency Care</h5>
                  <p className="text-[10px] text-slate-500">Instant Pain Relief</p>
                </div>
              </motion.div>

              {/* Floating Card 4: Affordable Treatment */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -right-6 glass-card p-3 rounded-xl flex items-center space-x-2.5 shadow-lg border border-white/80"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <h5 className="font-bold text-xs text-slate-800">Affordable Rates</h5>
                  <p className="text-[10px] text-slate-500">Best Quality Care</p>
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
