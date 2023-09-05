import React from "react";

const RussianFlag = ({ height = "30px", width = "22px" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width={width} height={height}>
      <path fill="#fff" d="M0 0h9v3H0z" />
      <path fill="#DA291C" d="M0 3h9v3H0z" />
      <path fill="#0032A0" d="M0 2h9v2H0z" />
    </svg>
  );
};

export default RussianFlag;
