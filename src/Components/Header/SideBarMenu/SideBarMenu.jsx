import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { ReactComponent as HomeIcon } from "../../../assets/images/data/sidebar-navlinks/home.svg";
import { ReactComponent as BatteryIcon } from "../../../assets/images/data/sidebar-navlinks/batteryIcon.svg";
import headerNavLinksData from "../../../lib/HeaderNavLinksData/HeaderNavLinksData";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/arrow-icon-toBottom.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import goToTop from "../../../lib/function/goToTop";

function SideBarMenu({ sideBarOpen, setSideBarOpen }) {
  const handleOutsideClick = () => {
    if (sideBarOpen) setSideBarOpen(false);
  };

  const handleInsideClick = (event) => {
    event.stopPropagation();
  };
  const handleMenuClick = () => {
    goToTop();
    setSideBarOpen(false);
  };

  return (
    <section onClick={handleOutsideClick} className={`fixed top-0 right-0 w-screen h-full min-h-screen bg-black ${sideBarOpen ? "bg-opacity-[0.25]" : "bg-opacity-0 pointer-events-none"} lg:hidden duration-300 z-50`}>
      <aside onClick={handleInsideClick} className={`absolute h-full overflow-y-auto top-0 ${sideBarOpen ? "right-0" : "-right-[100%]"} bg-white py-16 px-8 flex justify-center h-screen min-w-2/4 duration-300`}>
        <Accordion className="flex-col items-center gap-2 h-full">
          <AccordionItem>
            <AccordionHeader className={`${styles["accordion-header"]} stroke-NeutralN90 text-NeutralN700 bg-NeutralN10 border border-transparent hover:border-primary2 rounded-2xl min-w-[13.5rem] duration-300`}>
              <Link className="h-full w-full p-5 flex justify-start items-center" onClick={handleMenuClick} to="/">
                <HomeIcon className="ml-[0.625rem] stroke-inherit" />
                <h3 className="text-xs text-inherit font-semibold">صفحه اصلی</h3>
              </Link>
            </AccordionHeader>
          </AccordionItem>
          {headerNavLinksData.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader className={`${styles["accordion-header"]} ${item.hasSubMenu && styles.AccordionBodyHasMenu} stroke-NeutralN90 text-NeutralN700 bg-NeutralN10 border border-transparent hover:border-primary2 rounded-2xl p-5 flex justify-start items-center min-w-[13.5rem] duration-300`}>
                {item.icon}
                <h3 className="text-xs text-inherit font-semibold mr-[0.625rem]">{item.text}</h3>
                {item.hasSubMenu && <ArrowIcon className="stroke-inherit mr-[0.375rem]" />}
              </AccordionHeader>
              {item.hasSubMenu && (
                <AccordionBody className="bg-primary1 w-full rounded-b-2xl -mt-2 px-5 flex-col items-center gap-2">
                  <span className="w-full h-[1px] bg-NeutralN20 mb-2"></span>
                  {item.subMenu.map((subMenuItem, subMenuIndex) => (
                    <Link key={subMenuIndex} className="w-full" onClick={handleMenuClick} to="/products">
                      <span className={`${styles.navCards} bg-NeutralN10 rounded-2xl cursor-pointer w-full py-3 flex-center text-xs text-[#616161]`}>{subMenuItem}</span>
                    </Link>
                  ))}
                </AccordionBody>
              )}
            </AccordionItem>
          ))}
          <AccordionItem>
            <AccordionHeader className={`stroke-white text-white bg-primary6 border border-transparent hover:border-primary2 rounded-2xl p-5 flex justify-start items-center min-w-[13.5rem] duration-300`}>
              <BatteryIcon className="ml-[0.625rem] stroke-inherit" />
              <h3 className="text-xs text-inherit font-semibold">وارتا</h3>
            </AccordionHeader>
          </AccordionItem>
        </Accordion>
      </aside>
    </section>
  );
}

export default SideBarMenu;
