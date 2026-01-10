import React, { useState, useRef } from "react";
import GlassButtonLight from "../GlassButton/GlassButtonLight";
import { FaCircleArrowRight } from "react-icons/fa6";
import { countryCodes } from "./countryData";

const ContactForm = ({ onSuccess }) => {
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
    const formRef = useRef(null);

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors };

        if (name === 'phone_no') {
            // Count digits only
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

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validation Patterns
        const patterns = {
            // Allow alphanumeric, spaces, and basic punctuation for names/roles/company
            company_name: /^[a-zA-Z0-9\s.,'-]*$/,
            contact_name: /^[a-zA-Z0-9\s.,'-]*$/,
            contact_role: /^[a-zA-Z0-9\s.,'-]*$/,

            // Allow digits, spaces, plus, and dashes for phone
            phone_no: /^[0-9\s+\-]*$/,

            // Allow standard email characters (alphanumeric, @, ., _, -, +)
            email: /^[a-zA-Z0-9@._\-+]*$/,

            // Allow alphanumeric, whitespace (incl newlines), and common punctuation for notes
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

            setFormData(prev => ({
                ...prev,
                [name]: finalValue
            }));

            // Real-time validation for phone length
            if (name === 'phone_no') {
                setErrors(prev => {
                    const newErr = { ...prev };
                    delete newErr.phone_no;
                    return newErr;
                });
            }

            // Clear email error on change if it becomes valid or empty (optional, but good UX to clear error as they fix it)
            if (name === 'email' && errors.email) {
                // Basic check on change just to clear error
                setErrors(prev => {
                    const newErr = { ...prev };
                    delete newErr.email; // clear conservatively
                    return newErr;
                });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Final validation before submit
        const digitCount = (formData.phone_no.match(/\d/g) || []).length;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (digitCount !== 10 || (formData.email && !emailRegex.test(formData.email))) {
            validateField('phone_no', formData.phone_no);
            validateField('email', formData.email);
            return;
        }

        console.log("Form submit triggered");
        console.log("Form data:", formData);

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

            console.log("Payload being sent:", payload);

            const response = await fetch('https://dev-api.aeonxus.digital/api/general_apis/generate_leads', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(payload)
            });

            console.log("Response status:", response.status);
            console.log("Response headers:", [...response.headers.entries()]);

            if (response.ok) {
                const responseData = await response.json();
                console.log("Response data:", responseData);

                setMessage({
                    type: 'success',
                    text: 'Thank you! Your message has been sent successfully.'
                });

                // Reset form
                setFormData({
                    company_name: '',
                    contact_name: '',
                    contact_role: '',
                    phone_no: '',
                    email: '',
                    notes: ''
                });
                setErrors({});
                if (onSuccess) {
                    onSuccess();
                }
            } else {
                const errorText = await response.text();
                console.log("Error response:", errorText);
                throw new Error(`API Error: ${response.status}`);
            }
        } catch (error) {
            console.error('Detailed error:', error);
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);

            setMessage({
                type: 'error',
                text: 'Unable to submit form. Please check your internet connection or try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = (e) => {
        e.preventDefault();

        // Check errors before triggering submit
        const digitCount = (formData.phone_no.match(/\d/g) || []).length;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (digitCount !== 10) {
            setErrors(prev => ({ ...prev, phone_no: 'Phone number must be exactly 10 digits' }));
            return;
        }
        if (formData.email && !emailRegex.test(formData.email)) {
            setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
            return;
        }

        console.log("Button clicked");
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    return (
        <section className="contact-form-section my-5">
            <h2 className="fw-bold mb-4">Contact us</h2>

            {message.text && (
                <div
                    className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}
                    role="alert"
                >
                    {message.text}
                </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        {/* <label className="form-label">Company Name*</label> */}
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="form-control underline"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleInputChange}
                            required
                            disabled={loading}
                        />
                        {warnings.company_name && <small className="text-danger d-block">{warnings.company_name}</small>}
                    </div>
                    <div className="col-md-6 mb-3">
                        {/* <label className="form-label">Name*</label> */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control underline"
                            name="contact_name"
                            value={formData.contact_name}
                            onChange={handleInputChange}
                            required
                            disabled={loading}
                        />
                        {warnings.contact_name && <small className="text-danger d-block">{warnings.contact_name}</small>}
                    </div>

                </div>
                <div className="row mb-4">
                    <div className="col-md-12 mb-3">
                        {/* <label className="form-label">Role*</label> */}
                        <input
                            type="text"
                            placeholder="Role"
                            className="form-control underline"
                            name="contact_role"
                            value={formData.contact_role}
                            onChange={handleInputChange}
                            required
                            disabled={loading}
                        />
                        {warnings.contact_role && <small className="text-danger d-block">{warnings.contact_role}</small>}
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 mb-3 position-relative">
                        {/* <label className="form-label">Mobile Number*</label> */}
                        <div className="input-group">
                            <select
                                className="form-select underline"
                                style={{ maxWidth: '120px' }}
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
                                type="text"
                                placeholder="Mobile Number"
                                className={`form-control underline ${errors.phone_no ? 'is-invalid' : ''}`}
                                name="phone_no"
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

                    <div className="col-md-6 mb-3 position-relative">
                        {/* <label className="form-label">Email*</label> */}
                        <input
                            type="email"
                            placeholder="Email"
                            className={`form-control underline ${errors.email ? 'is-invalid' : ''}`}
                            name="email"
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

                <div className="mb-4">
                    {/* <label className="form-label">Any other comments?</label> */}
                    <textarea
                        className="form-control underline"
                        placeholder="Any other comments?"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows="3"
                        disabled={loading}
                    ></textarea>
                </div>

                <button type="submit" style={{ display: 'none' }} id="hidden-submit">Submit</button>

                <div onClick={handleButtonClick}>
                    <GlassButtonLight
                        title={loading ? "Submitting..." : "Submit"}
                        icon={() => <FaCircleArrowRight color="#FDAE04" size="25" />}
                        disabled={loading}
                    />
                </div>
            </form>


            <div className="robot-overlay-popup">
                <video className='' style={{ width: "100%" }} autoplay="true" muted="true" loop="true" preload="metadata" playsinline="true" data-goto-next="true" data-object-fit="cover" data-object-position="center top" webkit-playsinline="true">
                    <source src="/videos/contact-robot.webm" type="video/webm" />
                </video>
            </div>
        </section>
    );
};

export default ContactForm;