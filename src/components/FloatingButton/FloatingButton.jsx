import React from "react";


const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-btn" onClick={onClick}>
      <span>Talk to an Expert</span>
    </button>
  );
};

export default FloatingButton;
