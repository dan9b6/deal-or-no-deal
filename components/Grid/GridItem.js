import React from "react";

const GridItem = ({ children }) => {
  return (
    <div className="grid-item">
      {children}
      <div className="shelf"></div>
    </div>
  );
};

export default GridItem;
