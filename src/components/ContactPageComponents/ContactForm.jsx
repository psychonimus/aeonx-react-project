import React, { useState } from "react";
import GlassButtonLight from "../GlassButton/GlassButtonLight";
import { FaCircleArrowRight } from "react-icons/fa6";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        company_name: '',
        contact_name: '',
        contact_role: '',
        phone_no: '',
        email: '',
        notes: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submit triggered");
        console.log("Form data:", formData);
        
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const payload = {
                company_name: formData.company_name,
                contact_name: formData.contact_name,
                contact_role: formData.contact_role,
                phone_no: formData.phone_no,
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
        console.log("Button clicked");
        document.getElementById('contact-form').dispatchEvent(
            new Event('submit', { cancelable: true, bubbles: true })
        );
    };

    return (
        <section className="contact-form-section container my-5">
            <h2 className="fw-bold mb-4">Contact us</h2>

            {message.text && (
                <div 
                    className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}
                    role="alert"
                >
                    {message.text}
                </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Company Name*</label>
                        <input 
                            type="text" 
                            className="form-control underline" 
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleInputChange}
                            required 
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Name*</label>
                        <input 
                            type="text" 
                            className="form-control underline" 
                            name="contact_name"
                            value={formData.contact_name}
                            onChange={handleInputChange}
                            required 
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label className="form-label">Role*</label>
                        <input 
                            type="text" 
                            className="form-control underline" 
                            name="contact_role"
                            value={formData.contact_role}
                            onChange={handleInputChange}
                            required 
                            disabled={loading}
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Mobile Number*</label>
                        <input 
                            type="text" 
                            className="form-control underline" 
                            name="phone_no"
                            value={formData.phone_no}
                            onChange={handleInputChange}
                            required 
                            disabled={loading}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Email*</label>
                        <input 
                            type="email" 
                            className="form-control underline" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                            disabled={loading}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="form-label">Any other comments?</label>
                    <textarea 
                        className="form-control underline" 
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows="3"
                        disabled={loading}
                    ></textarea>
                </div>

                <button type="submit" style={{display: 'none'}} id="hidden-submit">Submit</button>

                <div onClick={handleButtonClick}>
                    <GlassButtonLight
                        title={loading ? "Submitting..." : "Submit"}
                        icon={() => <FaCircleArrowRight color="#FDAE04" size="25" />}
                        disabled={loading}
                    />
                </div>
            </form>
        </section>
    );
};

export default ContactForm;