import React from 'react'
import ContactHero from './components/contact-hero'
import Location from './components/location'
import ContactForm from './components/conatct-form'

export default function ConatctUsPage() {
  return (
    <div>
        <ContactHero />
        <Location />
        <ContactForm />
        {/* <StaticMapComponent /> */}
    </div>
  )
}
