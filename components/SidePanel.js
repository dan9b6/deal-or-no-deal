import React from "react";

const SidePanel = ({ arr, red }) => {
  return (
    <div className={red ? `panel panel--positive` : `panel`}>
      <div className="panel-content">
        <ul className="panel-list">
          {arr.map((el, i) => (
            <li key={i} className="panel-list-item">
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
