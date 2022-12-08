import React from "react";

const Box = ({ number, points, click }) => {
  return (
    <div
      className="box"
      onClick={click}
      data-box-value={points}
      data-box-number={number}
    >
      <div className="box-lid"></div>
      <div className="box-container">
        <div className="box-label">{number}</div>
      </div>
    </div>
  );
};

export default Box;
