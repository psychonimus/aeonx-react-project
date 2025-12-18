import React from 'react'
import Header from '../Header/Header'
import InfiniteCarousel from '../InfiniteCarousel/InfiniteCarousel'
import { FaCircleArrowRight } from "react-icons/fa6";
import GlassButtonLight from '../GlassButton/GlassButtonLight';

const teamImages = [
  "/images/group/team1.webp",
  "/images/group/team2.webp",
  "/images/group/team3.webp",
  "/images/group/team4.webp",
  "/images/group/team5.webp",
  "/images/group/team6.webp",
  "/images/group/team7.webp",
  "/images/group/team8.webp",
  "/images/group/team9.webp",
  "/images/group/team10.webp",
  "/images/group/team11.webp",
  "/images/group/team12.webp",
];


const AboutSection = () => {
  return (
    <>
      <section className="about-aeonx pb-2">
        <Header

          highlight="About AeonX Digital"
          headline="Empowering Enterprises with Strategy-Led Digital Transformation"
          desc="AeonX Digital empowers forward-thinking organizations with specialized business consulting services, enterprise application development, and end-to-end digital transformation solutions. We seamlessly integrate management consulting, corporate training programs, and bespoke education services to drive sustainable growth and market leadership."
        />

        <InfiniteCarousel images={teamImages} speed={4000} />

        <div className='container d-flex justify-content-center'>
          <GlassButtonLight href="/about" title="More About Us" icon={() => <FaCircleArrowRight color="#F97516" size={28} />} />
        </div>



      </section>
    </>
  )
}

export default AboutSection