import React, { useState } from 'react';
import './JobDescOne.css';
import GlassButton from '../../components/GlassButton/GlassButton';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaPaperPlane, FaCloudUploadAlt } from 'react-icons/fa';
import GlassButtonLight from '../../components/GlassButton/GlassButtonLight';

const JobDescOne = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add submission logic here
        alert('Application submitted successfully!');
    };

    return (
        <div className="jd-page-container">
            <div className="jd-content-wrapper">
                {/* Left Side - Job Description */}
                <div className="jd-left-section">
                    <h1 className="jd-title">Front End Developer</h1>
                    <div className="jd-subtitle">
                        <span><FaMapMarkerAlt /> Remote / Hybrid</span>
                        <span><FaBriefcase /> Full Time</span>
                        <span><FaClock /> Posted 2 days ago</span>
                    </div>

                    <div className="jd-section">
                        <h2 className="jd-section-title">About the Role</h2>
                        <p className="jd-text">
                            We are looking for a talented and passionate Front End Developer to join our creative team.
                            As a Front End Developer, you will be responsible for implementing visual elements that users see and interact with in a web application.
                            You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.
                        </p>
                    </div>

                    <div className="jd-section">
                        <h2 className="jd-section-title">Key Responsibilities</h2>
                        <ul className="jd-list">
                            <li>Develop new user-facing features using React.js.</li>
                            <li>Build reusable code and libraries for future use.</li>
                            <li>Ensure the technical feasibility of UI/UX designs.</li>
                            <li>Optimize application for maximum speed and scalability.</li>
                            <li>Assure that all user input is validated before submitting to back-end.</li>
                            <li>Collaborate with other team members and stakeholders.</li>
                            <li>Stay up-to-date with emerging technologies and industry trends.</li>
                        </ul>
                    </div>

                    <div className="jd-section">
                        <h2 className="jd-section-title">Requirements</h2>
                        <ul className="jd-list">
                            <li>Proven work experience as a Front-end developer (2+ years).</li>
                            <li>Strong understanding of JavaScript, including DOM manipulation and the JavaScript object model.</li>
                            <li>Thorough understanding of React.js and its core principles.</li>
                            <li>Experience with popular React.js workflows (such as Flux or Redux).</li>
                            <li>Familiarity with newer specifications of EcmaScript.</li>
                            <li>Experience with data structure libraries (e.g., Immutable.js).</li>
                            <li>Knowledge of modern authorization mechanisms, such as JSON Web Token.</li>
                            <li>Familiarity with modern front-end build pipelines and tools.</li>
                            <li>Experience with common front-end development tools such as Babel, Webpack, NPM, etc.</li>
                            <li>Ability to understand business requirements and translate them into technical requirements.</li>
                        </ul>
                    </div>

                    <div className="jd-section">
                        <h2 className="jd-section-title">Benefits</h2>
                        <ul className="jd-list">
                            <li>Competitive salary and equity package.</li>
                            <li>Health, dental, and vision insurance.</li>
                            <li>Flexible working hours and remote work options.</li>
                            <li>Professional development budget.</li>
                            <li>Collaborative and inclusive work environment.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side - Application Form */}
                <div className="jd-right-section">
                    <div className="application-form-container">
                        <h2 className="form-title">Apply Now</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="form-input"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Resume/CV</label>
                                <div className="file-upload-wrapper">
                                    <label htmlFor="resume-upload" className="file-upload-label">
                                        <FaCloudUploadAlt size={30} color="#f97316" />
                                        <span className="file-upload-text">
                                            {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
                                        </span>
                                        <input
                                            type="file"
                                            id="resume-upload"
                                            className="file-input"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="coverLetter">Cover Letter</label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    className="form-textarea"
                                    placeholder="Tell us why you're a great fit..."
                                    value={formData.coverLetter}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <div className="submit-btn-wrapper">
                                <button type="submit" style={{ background: 'none', border: 'none', padding: 0 }}>
                                    <GlassButtonLight title="Submit Application" icon={FaPaperPlane} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDescOne;
