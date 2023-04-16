import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { ReactComponent as HomeIcon } from "../../../assets/images/data/sidebar-navlinks/home.svg";
import headerNavLinksData from "../../../lib/HeaderNavLinksData/HeaderNavLinksData";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/arrow-icon-toBottom.svg";
import styles from "./styles.module.css";

function SideBarMenu(props) {
  const { sideBarOpen, setSideBarOpen } = props;
  return (
    <section onClick={() => setSideBarOpen(false)} className={`fixed top-0 right-0 w-screen h-screen bg-black ${sideBarOpen ? "bg-opacity-[0.25]" : "bg-opacity-0 pointer-events-none"} lg:hidden duration-300 z-50`}>
      <aside onClick={(e) => e.stopPropagation()} className={`absolute top-0 ${sideBarOpen ? "right-0" : "-right-[100%]"} bg-white pt-16 px-8 flex justify-center h-screen min-w-2/4 duration-300`}>
        <Accordion className="flex flex-col items-center gap-2">
          <AccordionItem>
            <AccordionHeader className={`${styles["accordion-header"]} stroke-NeutralN90 text-NeutralN700 bg-NeutralN10 rounded-2xl p-5 flex justify-start items-center min-w-[13.5rem] border border-transparent hover:border-neutral-300 duration-300`}>
              <HomeIcon className="ml-[0.625rem] stroke-inherit" />
              <h3 className="text-xs text-inherit font-semibold">صفحه اصلی</h3>
            </AccordionHeader>
          </AccordionItem>
          {headerNavLinksData.map((item, index) => {
            return (
              <AccordionItem key={index}>
                <AccordionHeader className={`${styles["accordion-header"]} stroke-NeutralN90 text-NeutralN700 bg-NeutralN10 rounded-2xl p-5 flex justify-start items-center w-[13.5rem] border border-transparent hover:border-neutral-300 duration-300`}>
                  {item.icon}
                  <h3 className="text-xs text-inherit font-semibold mr-[0.625rem]">{item.text}</h3>
                  {item.hasSubMenu && <ArrowIcon className="mr-[0.375rem] stroke-inherit" />}
                </AccordionHeader>
                {
                    
                }
              </AccordionItem>
            );
          })}
          <AccordionItem>
            <AccordionHeader className="bg-NeutralN10 rounded-2xl p-5 flex-center gap-3">
              <h3 className={`accordion-title`}>Title 1</h3>
            </AccordionHeader>
            <AccordionBody>
              <div className="accordion-body">Lorem ipsum dolor sit amet.</div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </aside>
    </section>
  );
}

export default SideBarMenu;
