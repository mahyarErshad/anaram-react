import React from "react";
import { ReactComponent as BatteryIcon } from "../../assets/images/data/sidebar-navlinks/batteryIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/images/data/sidebar-navlinks/userIcon.svg";

const headerNavLinksData = [
  {
    text: "باتری بر اساس سایز ",
    hasSubMenu: true,
    subMenu: ["باتری قلمی", "باتری نیم قلمی", "باتری کتابی", "باتری سکه ای", "باتری سالادی"],
    icon: <BatteryIcon />,
  },
  {
    text: "باتری بر اساس کاربرد ",
    hasSubMenu: true,
    subMenu: ["باتری قلمی", "باتری نیم قلمی", "باتری کتابی", "باتری سکه ای", "باتری سالادی"],
    icon: <BatteryIcon />,
  },
  {
    text: "باتری بر اساس تکنولوژی ",
    hasSubMenu: true,
    subMenu: ["باتری قلمی", "باتری نیم قلمی", "باتری کتابی", "باتری سکه ای", "باتری سالادی"],
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
];
export default headerNavLinksData;
