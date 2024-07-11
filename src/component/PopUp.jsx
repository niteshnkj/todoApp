import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PopUp = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="">
      <div className="">
        {children}
        <button className="" onClick={onClose}>
          <IoMdCloseCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default PopUp;
