import React from "react";
import { BiSupport } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";


const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-btn" onClick={onClick}>
      <span><AiFillMessage size={30} /></span>
    </button>
  );
};

export default FloatingButton;
