import React from 'react'
import Header from '../Header/Header'
import ServiceSlider from './ServiceSlider'
import ServiceSliderTwo from './ServiceSliderTwo'


const ServicesSection = () => {
  return (
    <>
        <section className="services">
        <Header
        subtext="Smart Value Proposition"
        headline="Bridge Enterprise Systems with"
        highlight="Intelligent Operations"
        desc="We connect SAP systems with AWS cloud infrastructure to streamline business operations and improve process efficiency. By leveraging native SAP capabilities, AWS services, and our proprietary unified platforms, we help organizations automate procurement, invoicing, and spend management, enhancing accuracy, visibility, and operational control."
        />

        <ServiceSlider />
        <ServiceSliderTwo />
        </section>


    </>
  )
}

export default ServicesSection