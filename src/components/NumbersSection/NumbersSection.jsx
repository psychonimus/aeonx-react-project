import React from 'react'
import earthvideo from "/videos/earth-bg.webm"
import Header from '../Header/Header'
import { BsFillPeopleFill } from "react-icons/bs";
import NumberCard from './NumberCard';
import { SiSap } from "react-icons/si";
import { FaGlobe } from "react-icons/fa6";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";

const NumbersSection = () => {
  return (
    <section className='numbers'>
        <video className='earth-bg-video' style={{width:"100%"}} playsInLine loop autoPlay muted preload="metadata">
          <source src= { earthvideo } type="video/webm" />
        </video>

        <div className="numbers-content d-flex align-items-center">
            <div className="container mt-5">
            <div className="row">
              <div className="col-md-3">
                <NumberCard 
                  metric="25+"
                  icon={() => <BsFillPeopleFill color="" size={18} />}
                  desc="Publicly Listed Clients"
                />
              </div>
              <div className="col-md-3 ">
              <NumberCard 
                  metric="30+"
                  icon={() => <SiSap color="" size={18} />}
                  desc="Successful S/4HANA Implementation"
                />
              </div>
              <div className="col-md-3 ">
              <NumberCard 
                  metric="24/7"
                  icon={() => <FaGlobe color="" size={18} />}
                  desc="Global Delivery Centre"
                />
              </div>
              <div className="col-md-3 ">
              <NumberCard 
                  metric="10,000+"
                  icon={() => <SiSap color="" size={18} />}
                  desc="SAP End Users Supported via AMS"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-3">
                <NumberCard 
                  metric="50+"
                  icon={() => <FaCloudArrowUp color="" size={18} />}
                  desc="Cloud Migration Projects Completed"
                />
              </div>
              <div className="col-md-3 ">
              <NumberCard 
                  metric="5"
                  icon={() => <FaGlobeAmericas color="" size={18} />}
                  desc="Countries Served Across Key Markets"
                />
              </div>
              <div className="col-md-3 ">
              <NumberCard 
                  metric="7+"
                  icon={() => <RiTeamFill color="" size={18} />}
                  desc="Years Average Team Experience"
                />
              </div>
              <div className="col-md-3 ">
              <NumberCard 
                  metric="ISO"
                  icon={() => <AiFillSafetyCertificate color="" size={18} />}
                  desc="ISO Certified & Great Place to Work® Recognized"
                />
              </div>
            </div>

            <div className="metrics-title row mt-5">
            <h2>GLOBAL IMPACT</h2>
            <h3>BY THE NUMBERS</h3>
            <p>Connecting people, data, and ideas across borders with measurable outcomes.</p>
            </div>
            </div>
        </div>

        
    </section>
  )
}

export default NumbersSection