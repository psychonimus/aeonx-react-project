import React, { useState } from 'react'
import Header from '../Header/Header'
import { FaArrowRight } from 'react-icons/fa'
import GlassButtonLight from '../GlassButton/GlassButtonLight'
import { RiArrowRightCircleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdSms } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiYoutubeLine } from "react-icons/ri";
import { countryCodes } from "../ContactPageComponents/countryData";

const CtaSection = () => {
    const [formData, setFormData] = useState({
        company_name: '',
        contact_name: '',
        contact_role: '',
        phone_no: '',
        email: '',
        notes: ''
    });

    const [countryCode, setCountryCode] = useState('+91');

    const [errors, setErrors] = useState({});
    const [warnings, setWarnings] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors };

        if (name === 'phone_no') {
            const digitCount = (value.match(/\d/g) || []).length;
            if (digitCount !== 10) {
                newErrors.phone_no = 'Phone number must be exactly 10 digits';
            } else {
                delete newErrors.phone_no;
            }
        }

        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && !emailRegex.test(value)) {
                newErrors.email = 'Please enter a valid email address';
            } else {
                delete newErrors.email;
            }
        }

        setErrors(newErrors);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const patterns = {
            company_name: /^[a-zA-Z0-9\s.,'-]*$/,
            contact_name: /^[a-zA-Z0-9\s.,'-]*$/,
            contact_role: /^[a-zA-Z0-9\s.,'-]*$/,
            phone_no: /^[0-9\s+\-]*$/,
            email: /^[a-zA-Z0-9@._\-+]*$/,
            notes: /^[a-zA-Z0-9\s.,!?'"()\-]*$/
        };

        const pattern = patterns[name];
        let isValidInput = true;

        if (pattern) {
            isValidInput = pattern.test(value);
        } else {
            const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
            isValidInput = !emojiRegex.test(value);
        }

        if (isValidInput) {
            if (name === 'phone_no') {
                const digitCount = (value.match(/\d/g) || []).length;
                if (digitCount > 10) return;
            }

            if (name === 'company_name' || name === 'contact_name' || name === 'contact_role') {
                if (value.length > 30) {
                    setWarnings(prev => ({ ...prev, [name]: 'Maximum characters reached' }));
                    return;
                }
            }

            let finalValue = value;
            if (name === 'company_name' || name === 'contact_name' || name === 'contact_role') {
                if (value.length > 30) {
                    finalValue = value.slice(0, 30);
                    setWarnings(prev => ({ ...prev, [name]: 'Maximum characters reached' }));
                } else {
                    setWarnings(prev => {
                        const newWarn = { ...prev };
                        delete newWarn[name];
                        return newWarn;
                    });
                }
            }

            setFormData(prev => ({ ...prev, [name]: finalValue }));

            if (name === 'phone_no') {
                setErrors(prev => {
                    const newErr = { ...prev };
                    delete newErr.phone_no;
                    return newErr;
                });
            }

            if (name === 'email' && errors.email) {
                setErrors(prev => {
                    const newErr = { ...prev };
                    delete newErr.email;
                    return newErr;
                });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const digitCount = (formData.phone_no.match(/\d/g) || []).length;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (digitCount !== 10 || (formData.email && !emailRegex.test(formData.email))) {
            validateField('phone_no', formData.phone_no);
            validateField('email', formData.email);
            return;
        }

        console.log("Form submit triggered", formData);
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const payload = {
                company_name: formData.company_name,
                contact_name: formData.contact_name,
                contact_role: formData.contact_role,
                phone_no: `${countryCode} ${formData.phone_no}`,
                email: formData.email,
                notes: formData.notes || "",
                referral: "AeonX Website",
                gtm_goal: "GTM000083"
            };

            const response = await fetch('https://dev-api.aeonxus.digital/api/general_apis/generate_leads', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
                setFormData({
                    company_name: '',
                    contact_name: '',
                    contact_role: '',
                    phone_no: '',
                    email: '',
                    notes: ''
                });
                setErrors({});
            } else {
                throw new Error(`API Error: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage({ type: 'error', text: 'Unable to submit form. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        document.getElementById('cta-contact-form').dispatchEvent(
            new Event('submit', { cancelable: true, bubbles: true })
        );
    };

    return (
        <>
            <section className="cta-section pb-5">
                <div className="container">
                    <Header
                        highlight="Contact Us"
                        headline="Have a Project? Let’s Talk!"
                    />

                    <div className="row">
                        <div className="col-lg-8" data-aos="fade-up">
                            <div className="contact-form-bg p-4">
                                <h2>Send us a Message</h2>
                                <p>Discover how we’ve collaborated with leading startups, scaleups, and enterprises to build next-gen digital solutions, from concept to </p>

                                {message.text && (
                                    <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                        {message.text}
                                    </div>
                                )}

                                <form id="cta-contact-form" className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className='w-100'>
                                            <input
                                            className='w-100'
                                                type="text"
                                                placeholder="Company Name"
                                                name="company_name"
                                                value={formData.company_name}
                                                onChange={handleInputChange}
                                                required
                                                disabled={loading}
                                            />
                                            {warnings.company_name && <small className="text-danger d-block text-start">{warnings.company_name}</small>}

                                        </div>
                                        <div className='w-100'>
                                            <input
                                            className='w-100'
                                                type="text"
                                                placeholder="Name"
                                                name="contact_name"
                                                value={formData.contact_name}
                                                onChange={handleInputChange}
                                                required
                                                disabled={loading}
                                            />
                                            {warnings.contact_name && <small className="text-danger d-block text-start">{warnings.contact_name}</small>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <input
                                            type="text"
                                            placeholder="Role"
                                            name='contact_role'
                                            value={formData.contact_role}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                        />
                                        {warnings.contact_role && <small className="text-danger d-block text-start">{warnings.contact_role}</small>}
                                    </div>
                                    <div className="form-row position-relative">
                                        <div className="w-100 position-relative">
                                            <div className="input-group h-100">
                                                <select
                                                    className="form-select cta-country-code"
                                                    style={{ maxWidth: '100px'}}
                                                    value={countryCode}
                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                    disabled={loading}
                                                >
                                                    {countryCodes.map((country) => (
                                                        <option key={country.code} value={country.dial_code}>
                                                            {country.code} ({country.dial_code})
                                                        </option>
                                                    ))}
                                                </select>
                                                <input
                                                    style={{ width: 'auto', flex: 1 }}
                                                    type="text"
                                                    placeholder="Phone"
                                                    name="phone_no"
                                                    className={`form-control ${errors.phone_no ? 'is-invalid' : ''} cta-phone-input`}
                                                    value={formData.phone_no}
                                                    onChange={handleInputChange}
                                                    required
                                                    disabled={loading}
                                                />
                                            </div>
                                            {errors.phone_no && (
                                                <div className="invalid-tooltip d-block" style={{ right: 0, top: '-10px', width: 'auto' }}>
                                                    {errors.phone_no}
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-100 position-relative">
                                            <input
                                                style={{ width: '100%' }}
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                className={errors.email ? 'is-invalid' : ''}
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                required
                                                disabled={loading}
                                            />
                                            {errors.email && (
                                                <div className="invalid-tooltip d-block" style={{ right: 0, top: '-10px', width: 'auto' }}>
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <textarea
                                        placeholder="Tell us about your project or goals..."
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        disabled={loading}
                                    ></textarea>

                                    <div onClick={handleButtonClick}>
                                        <GlassButtonLight
                                            title={loading ? "Sending..." : "send message"}
                                            icon={() => <RiArrowRightCircleFill color='#0173F1' size="30" />}
                                            disabled={loading}
                                        />
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="col-lg-4" data-aos="fade-up">
                            <div className="cta-card h-100 p-4 mt-4 mt-lg-0">
                                <h2 className='mb-4'>Hii, We are always here to help you!</h2>
                                <a href="tel:+022-66221640" className='text-decoration-none'>
                                    <div className="info-card d-flex gap-3 align-items-center p-2 mb-3">
                                        <div className="icon-container">
                                            <IoCall color='#fff' size="35" />
                                        </div>
                                        <div className="info-card-desc">
                                            <h4>Contact Number</h4>
                                            <a href="tel:+022-66221640">022-66221640</a>
                                        </div>
                                    </div>
                                </a>

                                <a href="mailto:sales@aeonx.digital" className='text-decoration-none'>
                                    <div className="info-card d-flex gap-3 align-items-center p-2 mb-3">
                                        <div className="icon-container">
                                            <MdEmail color='#fff' size="35" />
                                        </div>
                                        <div className="info-card-desc">
                                            <h4>Email</h4>
                                            <a href="mailto:sales@aeonx.digital">sales@aeonx.digital</a>
                                        </div>
                                    </div>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </section>








            
        </>
    )
}

export default CtaSection