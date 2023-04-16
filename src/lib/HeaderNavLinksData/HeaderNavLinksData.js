import batteryIcon from "../../assets/images/data/sidebar-navlinks/battery.svg";
import userIcon from "../../assets/images/data/sidebar-navlinks/user.svg";

const headerNavLinksData = [
  {
    text: "باتری بر اساس سایز ",
    hasSubMenu: true,
    icon: batteryIcon,
  },
  {
    text: "باتری بر اساس کاربرد ",
    hasSubMenu: true,
    icon: batteryIcon,
  },
  {
    text: "باتری بر اساس تکنولوژی ",
    hasSubMenu: true,
    icon: batteryIcon,
  },
  {
    text: "درباره آنارام",
    hasSubMenu: false,
    icon: userIcon,
  },
  {
    text: "تماس با آنارام",
    hasSubMenu: false,
    icon: userIcon,
  },
  {
    text: "وارتا",
    hasSubMenu: false,
    icon: batteryIcon,
  },
];
export default headerNavLinksData;
