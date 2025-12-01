import React from "react";
import logo1 from "/images/client-logo-1.webp";
import logo2 from "/images/client-logo-2.webp";
import logo3 from "/images/client-logo-3.webp";
import logo4 from "/images/client-logo-4.webp";
import logo5 from "/images/client-logo-5.webp";
import logo6 from "/images/client-logo-6.webp";
import Header from "../Header/Header";
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2, logo3, logo4, logo5, logo6,logo3, logo4, logo5,];




const PublicClients = () => {
  return (
    <section className="public-clients-section">
      <Header
            subtext="Our Clients"
            headline="Trusted by Leading Public Organizations"
            />

      <div className="pcs-grid">
        {logos.map((logo, i) => (
          <div className="pcs-card" key={i}>
            <img src={logo} alt={`Logo ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicClients;
