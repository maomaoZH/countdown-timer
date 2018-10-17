import React from "react";

const ResetTimer = ({ handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetTimer;
