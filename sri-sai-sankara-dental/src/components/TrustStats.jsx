import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Smile, Calendar } from 'lucide-react'

function TrustStats() {
  const stats = [
    {
      icon: <Heart className="w-6 h-6 text-clinicTeal" />,
      title: "Patient-Friendly Care",
      desc: "Gentle treatments designed to keep tooth pain and anxiety away, ensuring patient comfort.",
      color: "bg-teal-50"
    },
    {
      icon: <Users className="w-6 h-6 text-clinicSky" />,
      title: "Family Dental Clinic",
      desc: "Complete oral health care tailored for children, parents, and seniors under one roof.",
      color: "bg-sky-50"
    },
    {
      icon: <Smile className="w-6 h-6 text-emerald-500" />,
      title: "Smile Care",
      desc: "Enhance your confidence with professional teeth cleaning, fillings, and cosmetic dentistry.",
      color: "bg-emerald-50"
    },
    {
      icon: <Calendar className="w-6 h-6 text-indigo-500" />,
      title: "Easy Appointment Booking",
      desc: "Hassle-free slot booking via direct phone call, WhatsApp messaging, or our online form.",
      color: "bg-indigo-50"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div className="bg-slate-50 py-10 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card hover-lift p-6 rounded-2xl flex flex-col text-left border border-white/60 relative overflow-hidden"
            >
              {/* Highlight gradient bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-clinicTeal to-clinicSky opacity-70" />

              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4 shrink-0`}>
                {stat.icon}
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-slate-800 text-lg mb-2 tracking-tight">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default TrustStats
