import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import AboutSection from '../components/AboutSection/AboutSection'
import ExpertiseSection from '../components/ExpertiseSection/ExpertiseSection'
import NumbersSection from '../components/NumbersSection/NumbersSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import ClientLogosSection from '../components/ClientLogosSection/ClientLogosSection'
import CaseStudiesSection from '../components/CaseStudiesSection/CaseStudiesSection'
import TestimonialSection from '../components/TestimonialSection/TestimonialSection'
import AwardsSection from '../components/AwardsSection/AwardsSection'
import CtaSection from '../components/CtaSection/CtaSection'
import FooterSection from '../components/FooterSection/FooterSection'
import NumbersSectionOld from '../components/NumbersSection/NumbersSectionOld'
import PublicClients from '../components/ClientLogosSection/PublicClients'
import ProductShowcaseTwo from '../components/ProductShowcase/FlagshipProducts'
import FlagshipProducts from '../components/ProductShowcase/FlagshipProducts'




const Home = () => {

  
  return (

    <>

      <Hero />
      <FlagshipProducts />
      
      
      <AboutSection />
      <ExpertiseSection />
      {/* <NumbersSection /> */}
      <NumbersSectionOld />
      <ServicesSection />
      <ClientLogosSection />
      {/* <PublicClients /> */}
      <CaseStudiesSection />
      <TestimonialSection />
      <AwardsSection />
      <CtaSection />

    </>

  )
}

export default Home