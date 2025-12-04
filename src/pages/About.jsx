import React from 'react'
import {Helmet} from "react-helmet";
import AboutHero from '../components/AboutPageComponents/AboutHero'
import JourneySlider from '../components/AboutPageComponents/JourneySlider'
import CeoSection from '../components/AboutPageComponents/CeoSection'
import OurTeamSection from '../components/AboutPageComponents/OurTeamSection'


const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Aeonx Digital</title>
        <meta name="description" content="Aeonx Digital is a leading SAP consulting firm that provides end-to-end SAP solutions to clients across the globe." />
        <meta name="keywords" content="SAP consulting, SAP implementation, SAP migration, SAP upgrade, SAP support, SAP training, SAP certification, SAP best practices, SAP security, SAP compliance" />
        <meta name="author" content="Aeonx Digital" />
      </Helmet>
      <AboutHero />
      <JourneySlider />
      <CeoSection />
      <OurTeamSection />
    </>
  )
}

export default About