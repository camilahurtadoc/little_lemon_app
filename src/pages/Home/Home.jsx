import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Highlights from '../../components/Highlights/Highlights'
import Testimonials from '../../components/Testimonials/Testimonials'
import About from '../../components/About/About'

const Home = () => {
  return (
    <>
      <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
    </>
  )
}

export default Home