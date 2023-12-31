import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import LocalActivityTwoToneIcon from "@mui/icons-material/LocalActivityTwoTone";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <SidebarOption text={"Dashboard"} Icon={GridViewRoundedIcon} active />
      <SidebarOption text={"Trainings"} Icon={SportsEsportsRoundedIcon} />
      <SidebarOption text={"Users"} Icon={LocalActivityTwoToneIcon} />
      <SidebarOption text={"Analytics"} Icon={PinDropRoundedIcon} />
      <SidebarOption text={"My Account"} Icon={PinDropRoundedIcon} />
      <SidebarOption text={"Support"} Icon={PinDropRoundedIcon} />
    </div>
  );
}

export default Sidebar;
