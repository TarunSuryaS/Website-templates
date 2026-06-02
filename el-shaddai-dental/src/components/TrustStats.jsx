import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, ShieldAlert, Sparkles } from 'lucide-react'

function TrustStats() {
  const stats = [
    {
      icon: <Clock className="w-6 h-6 text-clinicTeal" />,
      title: "24/7 Dental Care",
      desc: "Emergency tooth pain care and expert treatments available round-the-clock.",
      color: "bg-teal-50"
    },
    {
      icon: <Users className="w-6 h-6 text-clinicSky" />,
      title: "Family Friendly Clinic",
      desc: "Gentle dental care designed for kids, parents, and senior citizens alike.",
      color: "bg-sky-50"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      title: "Implant Treatment",
      desc: "Premium tooth replacement solutions with highly durable, natural outcomes.",
      color: "bg-emerald-50"
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-500" />,
      title: "Emergency Support",
      desc: "Quick treatment for tooth fractures, bleeding gums, or swelling.",
      color: "bg-rose-50"
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
