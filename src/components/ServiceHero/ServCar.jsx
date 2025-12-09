import { useState, useEffect } from "react";
import "./ServCar.css";
import imp1 from "/images/sap-imp-1.png";
import imp2 from "/images/sap-imp-2.png";
import imp3 from "/images/sap-imp-3.png";
import imp4 from "/images/sap-imp-4.png";
import imp5 from "/images/sap-imp-5.png";

const teamMembers = [
  {
    name: "John Alvarez",
    role: "Growth Lead",
    img: imp1,
    icon: "users",
  },
  {
    name: "Jackson Mitchel",
    role: "AI Lead",
    img: imp2,
    icon: "bot",
  },
  {
    name: "Jenny Doe",
    role: "Product Head",
    img: imp3,
    icon: "briefcase",
    description: "Leading product vision & strategy",
  },
  {
    name: "Armenia Sean",
    role: "Social Media Head",
    img: imp4,
    icon: "message",
  },
  {
    name: "Maya Patel",
    role: "Design Lead",
    img: imp5,
    icon: "box",
  },
];

const getCardStyle = (relativePos) => {
  if (relativePos === 0) {
    return {
      transform: "translateX(0) scale(1) rotateY(0deg)",
      opacity: 1,
      filter: "brightness(1)",
      zIndex: 10,
    };
  } else if (relativePos === -1) {
    return {
      transform: "translateX(-180px) scale(0.9) rotateY(10deg)",
      opacity: 1,
      filter: "brightness(0.75)",
      zIndex: 5,
    };
  } else if (relativePos === 1) {
    return {
      transform: "translateX(180px) scale(0.9) rotateY(-10deg)",
      opacity: 1,
      filter: "brightness(0.75)",
      zIndex: 5,
    };
  } else if (relativePos === -2) {
    return {
      transform: "translateX(-360px) scale(0.85) rotateY(20deg)",
      opacity: 1,
      filter: "brightness(0.6)",
      zIndex: 2,
    };
  } else if (relativePos === 2) {
    return {
      transform: "translateX(360px) scale(0.85) rotateY(-20deg)",
      opacity: 1,
      filter: "brightness(0.6)",
      zIndex: 2,
    };
  } else {
    return {
      transform: `translateX(${relativePos * 180}px) scale(0.75) rotateY(${
        -relativePos * 15
      }deg)`,
      opacity: 1,
      filter: "brightness(0.5)",
      zIndex: 1,
    };
  }
};

const RoleIcon = ({ icon }) => {
  switch (icon) {
    case "users":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "bot":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      );
    case "briefcase":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      );
    case "message":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "box":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
          <polyline points="7.5 19.79 7.5 14.6 3 12" />
          <polyline points="21 12 16.5 14.6 16.5 19.79" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" x2="12" y1="22.08" y2="12" />
        </svg>
      );
    case "sidebar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="m16 15-3-3 3-3" />
        </svg>
      );
    default:
      return null;
  }
};

const ImplementationServices = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay with 5 second interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  return (
    <>
      <section className="serv-section" id="why">
        <div className="team-container">
          <div
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              className="carousel-nav-btn carousel-nav-prev"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="carousel-wrapper">
              <div className="carousel-track">
                {teamMembers.map((member, index) => {
                  const relativePos = index - currentIndex;
                  // Handle infinite loop positioning
                  const adjustedPos =
                    relativePos > teamMembers.length / 2
                      ? relativePos - teamMembers.length
                      : relativePos < -teamMembers.length / 2
                      ? relativePos + teamMembers.length
                      : relativePos;
                  const isActive = adjustedPos === 0;
                  const style = getCardStyle(adjustedPos);

                  return (
                    <div
                      key={index}
                      className={`carousel-card ${isActive ? "active" : ""}`}
                      style={style}
                    >
                      <img src={member.img} alt={member.name} />
                      <div
                        className={`card-gradient ${isActive ? "active" : ""}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="carousel-nav-btn carousel-nav-next"
              onClick={handleNext}
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="metric-overlay pb-5">
        <div className="container">
          <div className="metric-bg">
            <div className="row text-center gy-4">
              <div className="col-md-4">
                <div className="metric-card">
                  <div className="metric-content">
                    <h2 className="display-5 fw-bold">99%</h2>
                    <p className=" xl-fs-5 fw-medium">
                      of projects delivered within agreed <br />timelines
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="metric-card">
                  <div className="metric-content">
                    <h2 className="display-5 fw-bold">40+</h2>
                    <p className="xl-fs-5 fw-medium">
                      Go-lives delivered earlier than <br /> planned
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="metric-card">
                  <div className="metric-content">
                    <h2 className="display-5 fw-bold">20%</h2>
                    <p className="xl-fs-5 fw-medium">
                      Reduction in overall implementation <br /> time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImplementationServices;
