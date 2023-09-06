import React from "react";

const ArmenianFlag = ({ height = "30px", width = "22px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 3"
      width={width}
      height={height}
    >
      <path fill="#F2A800" d="M0 0h6v3H0z" />
      <path fill="#0033A0" d="M0 0h6v2H0z" />
      <path fill="#D90012" d="M0 0h6v1H0z" />
    </svg>
  );
};

export default ArmenianFlag;
