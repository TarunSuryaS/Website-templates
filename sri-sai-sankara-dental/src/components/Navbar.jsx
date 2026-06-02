import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, Menu, X, ArrowRight } from 'lucide-react'
import { CLINIC_NAME, PHONE_NUMBER, handleActionClick } from '../constants'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll event listener to add shadow/backdrop opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Emergency Care', href: '#emergency' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3 shadow-md shadow-slate-100/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-teal-blue flex items-center justify-center text-white font-bold text-xl shadow-md shadow-clinicTeal/20 group-hover:scale-105 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 4v12M6 12h12" />
                </svg>
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-clinicTeal transition-colors leading-tight text-left">
                Sri Sai Sankara <span className="text-clinicTeal font-medium block sm:inline">Dental Clinic</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[15px] font-semibold text-slate-600 hover:text-clinicTeal transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`tel:${PHONE_NUMBER || ''}`}
                onClick={(e) => handleActionClick(e, 'tel', PHONE_NUMBER)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-clinicTeal font-bold hover:bg-clinicTeal/5 border border-clinicTeal/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="#book"
                onClick={(e) => handleLinkClick(e, '#book')}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-teal-blue text-white font-semibold hover:shadow-lg hover:shadow-clinicTeal/20 hover:brightness-105 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 glass-nav shadow-xl border-t border-slate-100 py-6 px-4 lg:hidden"
            >
              <nav className="flex flex-col space-y-4 mb-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-base font-semibold text-slate-700 hover:text-clinicTeal px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE_NUMBER || ''}`}
                  onClick={(e) => handleActionClick(e, 'tel', PHONE_NUMBER)}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl border border-clinicTeal text-clinicTeal font-bold hover:bg-clinicTeal/5 transition-colors text-center"
                >
                  <Phone className="w-4.5 h-4.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="#book"
                  onClick={(e) => handleLinkClick(e, '#book')}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-teal-blue text-white font-semibold shadow-md shadow-clinicTeal/20 hover:brightness-105 transition-all text-center"
                >
                  <Calendar className="w-4.5 h-4.5" />
                  <span>Book Appointment</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar
