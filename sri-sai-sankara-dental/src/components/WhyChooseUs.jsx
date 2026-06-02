import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, Clock, ShieldCheck, Heart, MapPin, CalendarDays, PhoneCall, Users } from 'lucide-react'
import { CLINIC_NAME } from '../constants'

function WhyChooseUs() {
  const points = [
    {
      title: "Comfortable dental care",
      desc: "Mild techniques and warm approach designed to eliminate tooth pain and anxiety.",
      icon: <Heart className="w-5.5 h-5.5 text-pink-500" />,
      color: "bg-pink-50"
    },
    {
      title: "Patient-friendly approach",
      desc: "We treat every patient like family, explaining processes clearly and offering gentle care.",
      icon: <ShieldCheck className="w-5.5 h-5.5 text-clinicTeal" />,
      color: "bg-teal-50"
    },
    {
      title: "Affordable treatment focus",
      desc: "High-quality clinical dental solutions with highly transparent and accessible pricing.",
      icon: <Landmark className="w-5.5 h-5.5 text-emerald-500" />,
      color: "bg-emerald-50"
    },
    {
      title: "Family dental services",
      desc: "Complete treatments tailored for toddlers, children, teens, parents, and seniors.",
      icon: <Users className="w-5.5 h-5.5 text-violet-500" />,
      color: "bg-violet-50"
    },
    {
      title: "Clean and professional care",
      desc: "Strict surgical sterilization protocols ensuring a 100% safe, clean environment.",
      icon: <ShieldCheck className="w-5.5 h-5.5 text-sky-500" />,
      color: "bg-sky-50"
    },
    {
      title: "Easy appointment booking",
      desc: "Hassle-free online form slot booking, phone calls, or WhatsApp scheduling.",
      icon: <CalendarDays className="w-5.5 h-5.5 text-indigo-500" />,
      color: "bg-indigo-50"
    },
    {
      title: "Call and WhatsApp support",
      desc: "Direct rapid-response communication line for all patient questions and bookings.",
      icon: <PhoneCall className="w-5.5 h-5.5 text-emerald-500" />,
      color: "bg-emerald-50"
    },
    {
      title: "Local dental clinic near you",
      desc: "Ideally situated in your neighborhood, providing accessible dental care for all families.",
      icon: <MapPin className="w-5.5 h-5.5 text-amber-500" />,
      color: "bg-amber-50"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  }

  return (
    <div className="bg-gradient-soft py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-clinicTeal/10 text-clinicTeal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Patient-First Dentistry You Can Trust
          </h2>
          <p className="text-slate-500 font-semibold text-base sm:text-lg">
            At {CLINIC_NAME}, we are dedicated to blending high clinical standards with extreme comfort and friendly support.
          </p>
        </div>

        {/* Dynamic 8-card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card hover-lift p-6 rounded-3xl border border-white/60 bg-white/80 text-left flex flex-col justify-start relative shadow-sm overflow-hidden"
            >
              {/* Corner abstract decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 rounded-full blur-md translate-x-6 -translate-y-6" />

              {/* Icon Container */}
              <div className={`w-10 h-10 rounded-xl ${point.color} flex items-center justify-center mb-4.5 shrink-0 border border-slate-100`}>
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-slate-800 text-base mb-2 tracking-tight">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default WhyChooseUs
