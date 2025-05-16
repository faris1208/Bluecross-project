import React from 'react'
import AboutHero from './components/about-hero-section'
import AboutAbout from './components/about'
import StatsCounter from './components/counter'
import OurJourney from './components/our-journey'
import AboutUsReviews from './components/reviews'

export default function AboutUs() {
  return (
    <div>
        <AboutHero />
        <AboutAbout />
        <StatsCounter />
        {/* <AboutWhyChooseUs /> */}
        <OurJourney />
        <AboutUsReviews />
    </div>
  )
}
