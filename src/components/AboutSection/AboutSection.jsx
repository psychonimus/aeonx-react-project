import React from 'react'
import Header from '../Header/Header'
import InfiniteCarousel from '../InfiniteCarousel/InfiniteCarousel'
import { FaCircleArrowRight } from "react-icons/fa6";
import GlassButtonLight from '../GlassButton/GlassButtonLight';

const teamImages = [
  "/images/group/team1.png",
  "/images/group/team2.png",
  "/images/group/team3.png",
  "/images/group/team4.png",
  "/images/group/team5.png",
  "/images/group/team6.png",
  "/images/group/team7.png",
  "/images/group/team8.png",
  "/images/group/team9.png",
  "/images/group/team10.png",
  "/images/group/team11.png",
  "/images/group/team12.png",
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