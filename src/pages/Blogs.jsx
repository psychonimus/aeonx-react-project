import React from 'react'
import {Helmet} from "react-helmet";
import BlogsHeader from '../components/BlogsPageComponents/BlogsHeader'
import BlogsCardsSection from '../components/BlogsPageComponents/BlogsCardsSection'


const Blogs = () => {
  return (
    <>
    
        <Helmet>
        <title>Blogs - Aeonx Digital</title>
        <meta name="description" content="Aeonx Digital is a leading SAP consulting firm that provides end-to-end SAP solutions to clients across the globe." />
        <meta name="keywords" content="SAP consulting, SAP implementation, SAP migration, SAP upgrade, SAP support, SAP training, SAP certification, SAP best practices, SAP security, SAP compliance" />
        <meta name="author" content="Aeonx Digital" />
      </Helmet>

        <BlogsHeader />
        <BlogsCardsSection />
    </>
  )
}

export default Blogs