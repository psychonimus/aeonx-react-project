import React, { useState } from "react";
import GlassButton from "../GlassButton/GlassButton";
import GlassButtonLight from "../GlassButton/GlassButtonLight";
import { FaCircleArrowRight } from "react-icons/fa6";
import ContactRobot from "../ProductShowcase/ContactRobot";

const services = [
    "Brand Strategy & Communication",
    "Integrated Marketing Campaigns",
    "Social Media Marketing",
    "Website & Mobile App Development",
    "E-Commerce Solutions",
    "Customized Digital Solutions",
    "Enterprise Tech Development Projects",
    "ODC Services",
    
];

const ContactFormPopup = () => {
    const [selectedServices, setSelectedServices] = useState([]);

    const toggleService = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Selected Services:", selectedServices);
    };

    return (
        <section className="contact-form-section popup-form container my-5">
            <h2 className="fw-bold mb-4">Contact us</h2>

            <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="row mb-2">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Name*</label>
                        <input type="text" className="form-control underline" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Company Name*</label>
                        <input type="text" className="form-control underline" required />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row mb-2">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Email*</label>
                        <input type="email" className="form-control underline" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Mobile Number*</label>
                        <input type="text" className="form-control underline" required />
                    </div>
                </div>

                {/* Services */}
                <div className="mb-2">
                    <h5 className="fw-bold mb-3">
                        Which services are you interested in?
                    </h5>
                    <div className="d-flex flex-wrap gap-2">
                        {services.map((service, i) => (
                            <button
                                type="button"
                                key={i}
                                className={`service-btn ${selectedServices.includes(service) ? "selected" : ""
                                    }`}
                                onClick={() => toggleService(service)}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                </div>

                
                <div className="mb-2">
                    <label className="form-label">Any other comments?</label>
                    <textarea className="form-control underline" rows="3"></textarea>
                </div>

                <GlassButtonLight
                    title="Submit"
                    icon={()=><FaCircleArrowRight color="#FDAE04" size="25" />}
                />
                
            </form>

            <div className="robo-overlay">
                <ContactRobot />
            </div>
        </section>
    );
};

export default ContactFormPopup;
