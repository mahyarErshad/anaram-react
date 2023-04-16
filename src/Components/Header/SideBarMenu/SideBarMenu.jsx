import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import homeIcon from "../../../assets/images/data/sidebar-navlinks/home.svg";

function SideBarMenu(props) {
  const { sideBarOpen, setSideBarOpen } = props;
  return (
    <section onClick={() => setSideBarOpen(false)} className={`fixed top-0 right-0 w-screen h-screen bg-black ${sideBarOpen ? "bg-opacity-[0.25]" : "bg-opacity-0 pointer-events-none"} lg:hidden duration-300 z-50`}>
      <aside onClick={(e) => e.stopPropagation()} className={`absolute top-0 ${sideBarOpen ? "right-0" : "-right-[100%]"} bg-white pt-16 px-8 flex justify-center h-screen min-w-2/4 duration-300`}>
        <Accordion className="flex flex-col items-center">
          <AccordionItem>
            <AccordionHeader className="bg-NeutralN10 rounded-2xl p-5 flex-center w-[13.5rem]">
              <img className="ml-[0.625rem]" src={homeIcon} alt="Icon of home page" />
              <h3 className={`accordion-title text-sm text-NeutralN90`}>صفحه اصلی</h3>
            </AccordionHeader>
          </AccordionItem>

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
