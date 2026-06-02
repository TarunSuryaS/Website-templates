import React from 'react'
import { motion } from 'framer-motion'
import { Smile, AlertCircle, Zap, Shield, Sparkles, Droplets, Heart, FileText } from 'lucide-react'
import { CLINIC_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, handleActionClick } from '../constants'

function Services() {
  const services = [
    {
      title: "Tooth Pain Treatment",
      desc: "Quick care for tooth pain, sensitivity, swelling, and infection.",
      icon: <AlertCircle className="w-6 h-6 text-rose-500" />,
      color: "from-rose-500/10 to-rose-600/5",
      whatsappText: `Hi ${CLINIC_NAME}, I need urgent assistance regarding sudden Tooth Pain.`
    },
    {
      title: "Root Canal Treatment",
      desc: "Tooth-saving treatment for deep decay and severe tooth pain.",
      icon: <Zap className="w-6 h-6 text-clinicSky" />,
      color: "from-sky-500/10 to-sky-600/5",
      whatsappText: `Hi ${CLINIC_NAME}, I'd like to ask about Root Canal Treatment.`
    },
    {
      title: "Teeth Cleaning",
      desc: "Scaling and polishing for clean, fresh, and healthy teeth.",
      icon: <Droplets className="w-6 h-6 text-indigo-500" />,
      color: "from-indigo-500/10 to-indigo-600/5",
      whatsappText: `Hi ${CLINIC_NAME}, I want to book an appointment for Teeth Cleaning.`
    },
    {
      title: "Gum Care",
      desc: "Treatment for bleeding gums, swollen gums, bad breath, and gum infection.",
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500/10 to-emerald-600/5",
      whatsappText: `Hi ${CLINIC_NAME}, I'd like to consult for Gum Care and treatment.`
    },
    {
      title: "Wisdom Tooth Care",
      desc: "Diagnosis and treatment for painful or impacted wisdom teeth.",
      icon: <Shield className="w-6 h-6 text-slate-600" />,
      color: "from-slate-500/10 to-slate-600/5",
      whatsappText: `Hi ${CLINIC_NAME}, I'd like to get information on Wisdom Tooth Care.`
    },
    {
      title: "Dental Fillings",
      desc: "Treatment for cavities and damaged teeth using safe filling materials.",
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      color: "from-amber-500/10 to-amber-600/5",
      whatsappText: `Hi ${CLINIC_NAME}, I want to ask about Dental Fillings for cavities.`
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Smile improvement, teeth whitening, and aesthetic dental care.",
      icon: <Smile className="w-6 h-6 text-pink-500" />,
      color: "from-pink-500/10 to-pink-600/5",
      whatsappText: `Hi ${CLINIC_NAME}, I'd like to enquire about Cosmetic Dentistry.`
    },
    {
      title: "Children’s Dental Care",
      desc: "Gentle dental care for children and family oral health needs.",
      icon: <Heart className="w-6 h-6 text-teal-500" />,
      color: "from-teal-500/10 to-teal-600/5",
      whatsappText: `Hi ${CLINIC_NAME}, I'd like to ask about Children's Dental Care.`
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-clinicTeal/10 text-clinicTeal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Patient-Friendly Dental Care & Treatments
          </h2>
          <p className="text-slate-500 font-semibold text-base sm:text-lg">
            We provide a wide range of high-quality treatments designed to keep your family's smiles healthy and sparkling.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card hover-lift p-6 rounded-3xl border border-white/60 bg-white/80 text-left flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div>
                {/* Visual Accent Badge */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shrink-0`}>
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="font-extrabold text-slate-800 text-lg mb-2.5 tracking-tight">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-500 font-semibold leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100/60 flex items-center justify-between gap-2.5">
                <a
                  href={`#book`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-clinicTeal hover:underline transition-colors"
                >
                  Book Visit
                </a>
                
                {/* WhatsApp Chat Trigger */}
                <a
                  href={WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappText)}` : '#'}
                  onClick={(e) => handleActionClick(e, 'whatsapp', WHATSAPP_NUMBER)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 font-extrabold text-xs transition-colors shrink-0"
                >
                  {/* Miniature WhatsApp SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.923 9.923 0 0 0 4.808 1.24c5.505 0 9.99-4.478 9.99-9.984C22.007 6.478 17.518 2 12.012 2zm5.836 14.199c-.32.9-1.845 1.748-2.54 1.81-.63.056-1.442.274-4.226-.879-3.558-1.47-5.828-5.068-6.006-5.305-.178-.236-1.444-1.92-1.444-3.666 0-1.747.907-2.607 1.227-2.927.32-.32.707-.4.942-.4.236 0 .47.001.676.01.213.01.5.02.774.68.284.68.96 2.33 1.042 2.5.082.17.137.369.02.6-.118.23-.178.37-.356.577-.177.206-.373.46-.533.618-.178.175-.365.366-.157.72.207.354.922 1.523 1.977 2.464 1.36 1.213 2.505 1.587 2.86 1.746.356.16.562.13.774-.11.213-.242.924-1.077 1.173-1.443.249-.367.498-.306.837-.184.339.123 2.155 1.014 2.528 1.2.373.187.623.28.712.433.09.153.09 1.09-.23 1.99z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Microcopy tag */}
        <div className="mt-10 text-center">
          <p className="text-xs font-semibold text-slate-400">
            * Patient-friendly dental care • Easy appointment booking through phone or WhatsApp
          </p>
        </div>

      </div>
    </div>
  )
}

export default Services
