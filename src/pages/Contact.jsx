import React from 'react'
import {Helmet} from "react-helmet";
import ContactHeader from '../components/ContactPageComponents/ContactHeader'
import ContactForm from '../components/ContactPageComponents/ContactForm'
import MeetUsSection from '../components/ContactPageComponents/MeetUsSection'
import LocationAccordion from '../components/LocationsAccordion/LocationAccordion'



const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Aeonx Digital</title>
        <meta name="description" content="At AeonX Digital, we are committed to fostering a dynamic, inclusive, and innovative workplace culture. Our team of dedicated professionals is dedicated to delivering exceptional results and creating a positive impact in the industry." />
        <meta name="keywords" content="careers, job opportunities, employment, recruitment, talent acquisition, talent development, employee engagement, employee retention, employee satisfaction, employee well-being" />
        <meta name="author" content="AeonX Digital" />
      </Helmet>
      <ContactHeader />
      <ContactForm />
      <LocationAccordion />
      {/* <MeetUsSection /> */}
    </>
  )
}

export default Contact