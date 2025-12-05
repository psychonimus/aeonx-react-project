import SapSupport from '../components/ServiceHero/SapSupport'
import ImplementationSection from '../components/ServiceHero/ImplementationSection'
import ServiceHeroSection from '../components/ServiceHero/ServiceHeroSection'
import React from 'react'
import MigrationSection from '../components/ServiceHero/MigrationSection'
import ServicesCTA from '../components/ServiceHero/ServicesCTA'

const Services = () => {
  return (
    <>
      <ServiceHeroSection />
      <ImplementationSection />
      <SapSupport />
      <MigrationSection />
      <ServicesCTA />
    </>
  )
}

export default Services