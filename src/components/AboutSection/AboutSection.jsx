import React from 'react'
import Header from '../Header/Header'
import InfiniteCarousel from '../InfiniteCarousel/InfiniteCarousel'
import { FaCircleArrowRight } from "react-icons/fa6";
import GlassButtonLight from '../GlassButton/GlassButtonLight';

const teamImages = [
  "/images/team1.webp",
  "/images/team2.webp",
  "/images/team3.webp",
  "/images/team4.webp",
  "/images/team5.webp",
  "/images/team6.webp",
  "/images/team7.webp",
  "/images/team8.webp",
  "/images/team9.webp",
  "/images/team10.webp",

];


const AboutSection = () => {
  return (
    <>
      <section className="about-aeonx pb-2">
        <Header
          subtext="About AeonX Digital"
          headline="Strategic Business Transformation & "
          highlight="Technology Consulting Partner"
          desc="AeonX Digital empowers forward-thinking organizations with specialized business consulting services, enterprise application development, and end-to-end digital transformation solutions. We seamlessly integrate management consulting, corporate training programs, and bespoke education services to drive sustainable growth and market leadership."
        />

        <InfiniteCarousel images={teamImages} slidesPerView={4} speed={4000} />

        <div className='container d-flex justify-content-center'>
          <GlassButtonLight title="More About Us" icon={() => <FaCircleArrowRight color="#F97516" size={28} />} />
        </div>


        
      </section>
    </>
  )
}

export default AboutSection