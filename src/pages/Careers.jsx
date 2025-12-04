import React from 'react'
import {Helmet} from "react-helmet";
import ExperienceSection from '../components/CareersPageComponents/CareersHeader'

import OpenPositionsSection from '../components/CareersPageComponents/OpenPositionsSection'
import CareerCarouselSection from '../components/CareersPageComponents/CareerCarouselSection'
import CoreValuesSection from '../components/LifeAtAeonxPageSections/CoreValuesSection'





const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Aeonx Digital</title>
        <meta name="description" content="At AeonX Digital, we are committed to fostering a dynamic, inclusive, and innovative workplace culture. Our team of dedicated professionals is dedicated to delivering exceptional results and creating a positive impact in the industry." />
        <meta name="keywords" content="careers, job opportunities, employment, recruitment, talent acquisition, talent development, employee engagement, employee retention, employee satisfaction, employee well-being" />
        <meta name="author" content="AeonX Digital" />
      </Helmet>
        <ExperienceSection />
        <CareerCarouselSection />
        
        <OpenPositionsSection />
        <CoreValuesSection />  
        
    </>
  )
}

export default CareersPage