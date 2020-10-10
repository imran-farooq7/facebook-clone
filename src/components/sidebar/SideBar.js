import React from "react";
import SidebarRow from "../sidebar-row/SidebarRow";
import "./sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function SideBar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/116103483_10219532658121974_2029671476170403080_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeEFN5BZeVfKReSkyBQRJSEDna13W-q0djSdrXdb6rR2NLx3cjFzENaE1M4VBPYY_n4&_nc_ohc=ZBaNN2uTmdAAX8TISnd&_nc_ht=scontent.flhe5-1.fna&oh=eed067c0f54e97a7e7820029e0a9228e&oe=5FA760DF"
        title="Imran"
      />
      <SidebarRow Icon={LocalHospitalIcon} title="Covid 19 Info" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default SideBar;
