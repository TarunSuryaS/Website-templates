import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Info } from 'lucide-react'

function Testimonials() {
  const reviews = [
    {
      initials: "AR",
      name: "Anand Raj",
      location: "Kolathur, Chennai",
      quote: "The treatment was explained clearly and the clinic was very helpful. I felt no discomfort during my root canal care.",
      stars: 5,
    },
    {
      initials: "SP",
      name: "Sujatha P.",
      location: "Kolathur, Chennai",
      quote: "Good support for tooth pain and appointment booking. The staff answered my WhatsApp query within minutes and booked my slot.",
      stars: 5,
    },
    {
      initials: "KM",
      name: "Karthik M.",
      location: "Kolathur, Chennai",
      quote: "Highly affordable and patient-friendly dental care. Finding 24-hour dental support near Kolathur was a massive relief.",
      stars: 5,
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-clinicTeal/10 text-clinicTeal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Patient Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Loved By Kolathur Families
          </h2>
          <p className="text-slate-500 font-medium text-base sm:text-lg">
            See how El-Shaddai Dental helps patients overcome dental anxieties and get reliable, affordable treatments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-6 md:p-8 rounded-3xl border border-white/60 bg-white/90 text-left flex flex-col justify-between shadow-sm relative"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 shrink-0" />

              <div className="space-y-4">
                {/* 5 Stars Row */}
                <div className="flex items-center space-x-0.5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center space-x-3.5">
                {/* Avatar with Initials */}
                <div className="w-10 h-10 rounded-full bg-gradient-teal-blue flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-clinicTeal/10 shrink-0">
                  {rev.initials}
                </div>
                <div>
                  <span className="font-extrabold text-slate-800 text-sm block">{rev.name}</span>
                  <span className="text-[11px] text-slate-400 font-bold block">{rev.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Demo Notice disclaimer */}
        <div className="max-w-2xl mx-auto mt-10 p-4 bg-slate-100/50 rounded-2xl flex items-start space-x-2.5 justify-center border border-slate-200/40">
          <Info className="w-4.5 h-4.5 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 font-bold text-left leading-relaxed">
            Demo Disclaimer: Sample testimonials for demo. Replace with real patient reviews after approval.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
