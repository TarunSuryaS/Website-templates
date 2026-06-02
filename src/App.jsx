import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStats from './components/TrustStats'
import About from './components/About'
import Services from './components/Services'
import EmergencyCare from './components/EmergencyCare'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import AppointmentForm from './components/AppointmentForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyActions from './components/StickyActions'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden selection:bg-clinicTeal/20 selection:text-clinicTeal">
      {/* Translucent Frosted Glass Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Immersive Hero Header */}
        <section id="home">
          <Hero />
        </section>

        {/* Localized Trust Stats Row */}
        <TrustStats />

        {/* Clinic Identity & About Details */}
        <section id="about">
          <About />
        </section>

        {/* Dynamic Medical & Dental Services Catalog */}
        <section id="services">
          <Services />
        </section>

        {/* High-Conversion Urgency Block */}
        <section id="emergency">
          <EmergencyCare />
        </section>

        {/* Value Proposition & Differentiators Grid */}
        <WhyChooseUs />

        {/* Social Proof & Patient Feedback slider */}
        <section id="reviews">
          <Testimonials />
        </section>

        {/* Fully Interactive Booking Form */}
        <section id="book">
          <AppointmentForm />
        </section>

        {/* Contact info, Direct Call/WhatsApp, Google Map Block */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Corporate Clinic Footer */}
      <Footer />

      {/* Sticky Quick-Call Actions (Exclusively rendered for Mobile viewport) */}
      <StickyActions />
    </div>
  )
}

export default App
