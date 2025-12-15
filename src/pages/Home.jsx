import React from 'react'
import { Helmet } from "react-helmet";
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
import Header from '../components/Header/Header';





const Home = () => {


  return (

    <>

      <Helmet>
        <title>Home - Aeonx Digital</title>
        <meta name="description" content="Aeonx Digital is a leading SAP consulting firm that provides end-to-end SAP solutions to clients across the globe." />
        <meta name="keywords" content="SAP consulting, SAP implementation, SAP migration, SAP upgrade, SAP support, SAP training, SAP certification, SAP best practices, SAP security, SAP compliance" />
        <meta name="author" content="Aeonx Digital" />
      </Helmet>

      <Hero />
      <AboutSection />
      
      <div className="mt-5">
        <NumbersSectionOld />
      </div>
      <ExpertiseSection />

      
      <ServicesSection />

      

      <FlagshipProducts />

      <ClientLogosSection />
      
      <CaseStudiesSection />
      <TestimonialSection />
      <AwardsSection />
      <CtaSection />

    </>

  )
}

export default Home