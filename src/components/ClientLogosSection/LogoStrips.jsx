import React from "react";
import logo1 from "/images/client-logo-1.webp";
import logo2 from "/images/client-logo-2.webp";
import logo3 from "/images/client-logo-3.webp";
import logo4 from "/images/client-logo-4.webp";
import logo5 from "/images/client-logo-5.webp";
import logo6 from "/images/client-logo-6.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const LogoStrips = () => {
  return (
    <div className="logo-strip-container">
      <div className="client-title"><a href="#" class="btn-shine">Private Sector Clients</a></div>
      {/* Top Row - Left to Right */}
      <div className="logo-strip">
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-item" key={`top-${index}`}>
              <img src={logo} alt={`client-logo-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Right to Left */}
      <div className="logo-strip reverse mt-4">
          
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-item" key={`bottom-${index}`}>
              <img src={logo} alt={`client-logo-${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="client-title mt-5"><a href="#" class="btn-shine">Public Sector Clients</a></div>
      {/* Top Row - Left to Right */}
      <div className="logo-strip">
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-item" key={`top-${index}`}>
              <img src={logo} alt={`client-logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoStrips;
