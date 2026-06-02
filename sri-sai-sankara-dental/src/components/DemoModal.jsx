import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare, MapPin, X, AlertCircle } from 'lucide-react'

function DemoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState('phone') // 'phone', 'whatsapp', 'maps'

  useEffect(() => {
    const handleShowModal = (e) => {
      if (e.detail && e.detail.type) {
        setModalType(e.detail.type)
        setIsOpen(true)
      }
    }

    window.addEventListener('show-demo-modal', handleShowModal)
    return () => window.removeEventListener('show-demo-modal', handleShowModal)
  }, [])

  const getContent = () => {
    switch (modalType) {
      case 'phone':
        return {
          title: "Phone Call Enquiry",
          desc: "This button will trigger an instant phone call to the clinic.",
          placeholder: "e.g., +91 98765 43210",
          icon: <Phone className="w-8 h-8 text-clinicTeal" />,
          colorClass: "bg-teal-50 text-clinicTeal border-teal-100",
        }
      case 'whatsapp':
        return {
          title: "WhatsApp Chat Integration",
          desc: "This button will open WhatsApp with a pre-filled service inquiry message, allowing patients to consult or book instantly.",
          placeholder: "e.g., +91 98765 43210",
          icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
          colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100",
        }
      case 'maps':
        return {
          title: "Google Maps Navigation",
          desc: "This button will launch Google Maps on the patient's device, with pre-configured step-by-step navigation directly to your clinic entrance.",
          placeholder: "e.g., Sri Sai Sankara Dental Clinic, Chennai",
          icon: <MapPin className="w-8 h-8 text-clinicSky" />,
          colorClass: "bg-sky-50 text-clinicSky border-sky-100",
        }
      default:
        return {
          title: "Demo Interaction",
          desc: "This is a premium clinic interactive feature demo.",
          placeholder: "",
          icon: <AlertCircle className="w-8 h-8 text-slate-500" />,
          colorClass: "bg-slate-50 text-slate-500 border-slate-100",
        }
    }
  }

  const content = getContent()

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 md:p-8 text-left shadow-2xl backdrop-blur-lg"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Header Icon */}
              <div className={`w-16 h-16 rounded-2xl ${content.colorClass} border flex items-center justify-center shadow-sm`}>
                {content.icon}
              </div>

              {/* Title and description */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {content.title}
                </h3>
                <span className="inline-block bg-amber-500/10 text-amber-600 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                  Interactive Demo Mode
                </span>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {content.desc}
              </p>

              {/* Showcase Placeholder Box */}
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  How it works
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Upon clinic approval, we will configure this button with your specific phone number or maps link. 
                </p>
                <div className="text-[11px] font-bold text-slate-400 italic">
                  Value to update: <span className="text-slate-600 font-mono select-all bg-white px-1.5 py-0.5 rounded border border-slate-200">{content.placeholder}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold text-sm shadow-md transition-all text-center focus:outline-none"
                >
                  Got It
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default DemoModal
