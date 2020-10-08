import React from "react";
import SidebarRow from "../sidebar-row/SidebarRow";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
    </div>
  );
}

export default SideBar;
