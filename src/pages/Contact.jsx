import React from 'react'
import ContactHeader from '../components/ContactPageComponents/ContactHeader'
import ContactForm from '../components/ContactPageComponents/ContactForm'
import MeetUsSection from '../components/ContactPageComponents/MeetUsSection'
import LocationAccordion from '../components/LocationsAccordion/LocationAccordion'



const Contact = () => {
  return (
    <>
      <ContactHeader />
      <ContactForm />
      <LocationAccordion />
      <MeetUsSection />
    </>
  )
}

export default Contact