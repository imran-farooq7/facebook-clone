import React from "react";
import "./sidebarrow.css";

function SidebarRow({ title, src, icon }) {
  return (
    <div className="sidebarrow">
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
