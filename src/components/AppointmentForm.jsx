import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Phone, User, Stethoscope, Clock, MessageSquare, CheckCircle, X } from 'lucide-react'

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const treatments = [
    "Dental Implants",
    "Tooth Pain Treatment",
    "Root Canal Treatment",
    "Wisdom Tooth Removal",
    "Gum Care",
    "Teeth Cleaning",
    "Cosmetic Dentistry",
    "Emergency Dental Care",
    "General Consultation"
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Quick validation
    if (!formData.name || !formData.phone || !formData.treatment || !formData.date || !formData.time) {
      alert("Please fill in all required fields.")
      return
    }

    setLoading(true)
    
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      treatment: '',
      date: '',
      time: '',
      message: ''
    })
    setSubmitted(false)
  }

  return (
    <div className="bg-gradient-soft py-16 md:py-24 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl translate-x-12 translate-y-12" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-clinicTeal/10 text-clinicTeal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Appointments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Schedule Your Consult in Minutes
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            Fill out the form below to request your dental appointment slot. Our team in Kolathur will reach out to confirm your timing.
          </p>
        </div>

        {/* Main Glass Card Form Container */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white bg-white/70 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-1.5">
                      <User className="w-4.5 h-4.5 text-clinicTeal" />
                      <span>Full Name <span className="text-rose-500">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-4 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-clinicTeal/20 focus:border-clinicTeal transition-all font-medium text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-1.5">
                      <Phone className="w-4.5 h-4.5 text-clinicTeal" />
                      <span>Phone Number <span className="text-rose-500">*</span></span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-clinicTeal/20 focus:border-clinicTeal transition-all font-medium text-sm"
                    />
                  </div>

                  {/* Treatment dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-1.5">
                      <Stethoscope className="w-4.5 h-4.5 text-clinicTeal" />
                      <span>Treatment Needed <span className="text-rose-500">*</span></span>
                    </label>
                    <select
                      name="treatment"
                      required
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-clinicTeal/20 focus:border-clinicTeal transition-all font-medium text-sm"
                    >
                      <option value="" disabled>Select a treatment</option>
                      {treatments.map((t, idx) => (
                        <option key={idx} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date field */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-1.5">
                      <Calendar className="w-4.5 h-4.5 text-clinicTeal" />
                      <span>Preferred Date <span className="text-rose-500">*</span></span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-clinicTeal/20 focus:border-clinicTeal transition-all font-medium text-sm"
                    />
                  </div>

                  {/* Time slot dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-1.5">
                      <Clock className="w-4.5 h-4.5 text-clinicTeal" />
                      <span>Preferred Time <span className="text-rose-500">*</span></span>
                    </label>
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-clinicTeal/20 focus:border-clinicTeal transition-all font-medium text-sm"
                    >
                      <option value="" disabled>Select preferred time slot</option>
                      <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                      <option value="Late Night / Emergency (8:00 PM - 9:00 AM)">Late Night / Emergency (8:00 PM - 9:00 AM)</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center space-x-1.5">
                      <MessageSquare className="w-4.5 h-4.5 text-clinicTeal" />
                      <span>Short Message / Symptoms (Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe tooth pain, implants enquiry, cleaning requirements..."
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-clinicTeal/20 focus:border-clinicTeal transition-all font-medium text-sm resize-none"
                    />
                  </div>

                </div>

                {/* Submit button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4.5 rounded-2xl bg-gradient-teal-blue text-white font-extrabold shadow-xl shadow-clinicTeal/15 hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 transition-all text-center focus:outline-none"
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing request...</span>
                      </span>
                    ) : (
                      <span>Request Appointment</span>
                    )}
                  </button>
                </div>

                {/* Conversion assurance microcopy */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>* 100% Secure & Confidential</span>
                  <span>* Book your dental appointment today</span>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 px-4 flex flex-col items-center justify-center text-center space-y-6"
              >
                {/* Animated checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 border border-emerald-200 shadow-inner"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>

                {/* Primary Message */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Appointment Request Received!
                  </h3>
                  <p className="text-slate-500 font-semibold text-sm max-w-md">
                    Thank you! The clinic team will contact you shortly.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-150 max-w-sm w-full text-left space-y-3 shadow-inner">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block border-b border-slate-200 pb-1.5">
                    Request Details
                  </span>
                  <div className="text-xs space-y-2 text-slate-600 font-semibold">
                    <p className="flex justify-between">
                      <span className="text-slate-400">Patient:</span> 
                      <span className="text-slate-800 font-bold">{formData.name}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400">Treatment:</span> 
                      <span className="text-slate-800 font-bold">{formData.treatment}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400">Preferred Date:</span> 
                      <span className="text-slate-800 font-bold">{formData.date}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400">Time Slot:</span> 
                      <span className="text-slate-800 font-bold">{formData.time}</span>
                    </p>
                  </div>
                </div>

                {/* Button to Book Another or Reset */}
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-md"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  )
}

export default AppointmentForm
