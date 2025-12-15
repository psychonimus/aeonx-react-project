import React from "react";
import { BiSupport } from "react-icons/bi";


const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-btn" onClick={onClick}>
      <span><BiSupport size={30} /></span>
    </button>
  );
};

export default FloatingButton;
