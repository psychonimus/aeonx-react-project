import React from 'react'
import {Helmet} from "react-helmet";
import EventHero from '../components/EventsPageComponents/EventHero'
import PastEventSection from '../components/EventsPageComponents/PastEventsSection'
import ThreeDImageRing from '../components/NewThreeDComponents/ThreeDImageRing'
import InteractiveBentoGallery from '../components/PhotoGallary/InteractiveBentoGallery'

const Events = () => {
  









  return (
    <>
      <Helmet>
        <title>Events - Aeonx Digital</title>
        <meta name="description" content="At AeonX Digital, we are committed to fostering a dynamic, inclusive, and innovative workplace culture. Our team of dedicated professionals is dedicated to delivering exceptional results and creating a positive impact in the industry." />
        <meta name="keywords" content="careers, job opportunities, employment, recruitment, talent acquisition, talent development, employee engagement, employee retention, employee satisfaction, employee well-being" />
        <meta name="author" content="AeonX Digital" />
      </Helmet>
      
      <EventHero />
      {/* <InteractiveBentoGallery mediaItems={mediaItems} /> */}
      <PastEventSection />
      {/* <div className='container-fluid my-5' style={{ width: '100%', height: '100vh' }}>
        <ThreeDImageRing images={imageUrls} />
      </div> */}
    </>
  )
}

export default Events