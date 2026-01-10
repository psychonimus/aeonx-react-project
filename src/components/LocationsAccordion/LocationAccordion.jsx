import React, { useState } from 'react';
import './LocationAccordion.css';
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const accordionData = [
    {
        id: 'Mumbai',
        locationName: 'MUMBAI OFFICE',
        address: 'AeonX Digital, 278, Jeevan Udyog Building, DN Road, Fort, Mumbai, India-400001',
        contactNumber: '+91 22 66221640',
        email: 'sales@aeonx.digital',
        locationMap: (
            <div className="preview-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.919444251979!2d72.83018677466185!3d18.934959456386117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1dc65faaaab%3A0x7ae9bb3c98f36de9!2sJeevan%20Udyog%20Building!5e0!3m2!1sen!2sin!4v1764050422155!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        )
    },
    {
        id: 'Bhuj',
        locationName: 'BHUJ OFFICE',
        address: '24/7 Delivery Center, C-203/206 JV Business Park 1 Opposite Smrutivan Memorial Bhuj.370001 +91 99099 86118',
        contactNumber: '+91 99099 86118',
        email: 'sales@aeonx.digital',
        locationMap: (
            <div className="preview-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.1179566999735!2d69.69056717477663!3d23.238794308225714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e171e2726461%3A0xc33f00a1f6567ba3!2sAeonX%20Digital!5e0!3m2!1sen!2sin!4v1764051772760!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        )
    },
    {
        id: 'Dubai',
        locationName: 'DUBAI OFFICE',
        address: 'Unit 13, Level 6, GD-4, PO Box-506695, DIFC United Arab Emirates +971 -50 -1296977',
        contactNumber: '+971 -50 -1296977',
        email: 'sales@aeonx.digital',
        locationMap: (
            <div className="preview-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7219.526134928089!2d55.27425809065859!3d25.211211517688568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f436fd12537cd%3A0xe947c27e605e24de!2sDIFC%2C%20Gate%20District%20Precinct%204!5e0!3m2!1sen!2sin!4v1764051984768!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        )
    },
    {
        id: 'Kolkata',
        locationName: 'KOLKATA OFFICE',
        address: 'Unit 7WS8A, 7th Floor, Mani Casadona, Plot No: II F/04. Action Area: II-F, Rajarhat Newtown, Kolkata-700156, Land Mark – Opp. to ECO Space.',
        contactNumber: '+91 22 66221640',
        email: 'sales@aeonx.digital',
        locationMap: (
            <div className="preview-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.827707805037!2d88.48414002475752!3d22.585546382496776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b2730768437%3A0x8c363ad110418c95!2sMani%20Casadona!5e0!3m2!1sen!2sin!4v1764052213974!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
        )
    },
    {
        id: 'Ahmedabad',
        locationName: 'AHMEDABAD OFFICE',
        address: 'Aeonx Digital-Shyamal Unicus, B-1103, Shyamal Cross Rd, Balgayatri Society Part-2, Satellite, Shyamal, Ahmedabad, Gujarat 380015',
        contactNumber: '+91 22 66221640',
        email: 'sales@aeonx.digital',
        locationMap: (
            <div className="preview-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2962284092837!2d72.52791712476994!3d23.012893166690397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851f81ee4c8f%3A0x6501ecdfec8bc521!2sUNICUS%20SHYAMAL!5e0!3m2!1sen!2sin!4v1767704802261!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        )
    },
    {
        id: 'Dehradun',
        locationName: 'DEHRADUN OFFICE',
        address: 'AeonX Digital, K K Tower, Above HDFC Bank, Doiwala, Dehradun, 248140 Uttrakhand, India',
        contactNumber: '+91 22 66221640',
        email: 'sales@aeonx.digital',
        locationMap: (
            <div className="preview-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.9142266581252!2d78.1217680750158!3d30.182444062020085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390925caa6042bf9%3A0xf4ba62ebb5513fd7!2sAeonX%20Digital!5e0!3m2!1sen!2sin!4v1764053612262!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        )
    },
    {
        id: 'Noida',
        locationName: 'NOIDA OFFICE',
        address: 'AeonX Digital Plot no A41, Iconic Corenthum, office no 1205B, 12th floor, sector 62. near Electronic City Metro Station. Uttar Pradesh 201301',
        contactNumber: '+91 22 66221640',
        email: 'sales@aeonx.digital',
        locationMap: (
            <div className="preview-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.205755439156!2d77.35901254713932!3d28.620726396617393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5033f965f87%3A0x6e38cc7ddc5dd844!2sAeonX%20Digital!5e0!3m2!1sen!2sin!4v1764053756695!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        )
    },

];

const LocationAccordion = () => {
    const [activeItem, setActiveItem] = useState('Mumbai');
    const [expandedItem, setExpandedItem] = useState('Mumbai');

    const toggleAccordion = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
        setActiveItem(id);
    };

    const currentPreview = accordionData.find(item => item.id === activeItem)?.locationMap;

    return (
        <div className="location-accordion-preview-container">
            <div className="container">
                <div className="row">
                    <h2 className="fw-bold mb-3 meet-heading" data-aos="fade-up">MEET US</h2>
                    <p className="mb-5 meet-subheading" data-aos="fade-up">
                        Come visit us for a coffee and a chat – we're always up for a good conversation!
                    </p>
                    {/* Left Side - Accordion */}
                    <div className="col-12 col-lg-6 location-accordion-column" data-aos="fade-up">

                        <div className="location-accordion-wrapper">
                            {accordionData.map((item) => (
                                <div key={item.id} className="location-accordion-item-wrapper">
                                    <button
                                        className={`location-accordion-header ${activeItem === item.id ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(item.id)}
                                    >
                                        <span className="location-accordion-title"><IoLocationSharp />{item.locationName}</span>

                                        <span className={`location-accordion-icon ${expandedItem === item.id ? 'expanded' : ''}`}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={`location-accordion-content ${expandedItem === item.id ? 'expanded' : ''}`}>
                                        <div className="location-accordion-content-inner">
                                            <p>{item.address}</p>
                                            <div className='location-contact-links d-flex flex-column gap-2 mt-2'>
                                                <a href={`tel:${item.contactNumber}`} className='location-contact'><IoCall className='me-3' />{item.contactNumber}</a>
                                                <a href={`mailto:${item.email}`} className='location-email'><IoMail className='me-3' />{item.email}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Preview */}
                    <div className="col-12 col-lg-6 preview-column" data-aos="fade-up" 
                    
                    
                    >
                        <div className="preview-wrapper">
                            {currentPreview}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationAccordion;