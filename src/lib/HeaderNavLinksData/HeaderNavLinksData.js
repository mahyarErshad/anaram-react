import React from "react";
import { ReactComponent as BatteryIcon } from "../../assets/images/data/sidebar-navlinks/batteryIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/images/data/sidebar-navlinks/userIcon.svg";

const headerNavLinksData = [
  {
    text: "باتری بر اساس سایز ",
    hasSubMenu: true,
    icon: <BatteryIcon />,
  },
  {
    text: "باتری بر اساس کاربرد ",
    hasSubMenu: true,
    icon: <BatteryIcon />,
  },
  {
    text: "باتری بر اساس تکنولوژی ",
    hasSubMenu: true,
    icon: <BatteryIcon />,
  },
  {
    text: "درباره آنارام",
    hasSubMenu: false,
    icon: <UserIcon />,
  },
  {
    text: "تماس با آنارام",
    hasSubMenu: false,
    icon: <UserIcon />,
  },
  {
    text: "وارتا",
    hasSubMenu: false,
    icon: <BatteryIcon />,
  },
];
export default headerNavLinksData;
