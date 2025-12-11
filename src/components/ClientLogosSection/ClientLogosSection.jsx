import React from 'react'
import Header from '../Header/Header'
import LogoStrips from './LogoStrips'

const ClientLogosSection = () => {
  return (
    <>
    <section className="client-logos">
        <div className="container-fluid px-0">
            <Header
            
            headline="Trusted by Leading Organizations"
            highlight="Meet Our Clients"
            />

            <LogoStrips />
        </div>
    </section>
    </>
  )
}

export default ClientLogosSection