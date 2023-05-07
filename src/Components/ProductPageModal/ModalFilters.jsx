import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import DoubleRangerInput from "../Utils/DoubleRangerInput/DoubleRangerInput";
import CheckBox from "../Utils/CheckBox/CheckBox";
import { ReactComponent as ArrowIcon } from "../../assets/images/icons/arrow-icon-toBottom.svg";

function ModalFilters() {
  return (
    <Accordion className="w-full border-b border-NeutralN30">
      <AccordionItem>
        <AccordionHeader className="w-full flex justify-between items-center py-6 border-t border-NeutralN30">
          تکنولوژی ساخت
          <ArrowIcon className="stroke-NeutralN100 w-3 h-3 duration-300" />
        </AccordionHeader>
        <AccordionBody>
          <CheckBox label="آلکاین" counter={24} />
          <CheckBox label="روی کربن" counter={14} />
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader className="w-full flex justify-between items-center py-6 border-t border-NeutralN30">
          ولتاژ
          <ArrowIcon className="stroke-NeutralN100 w-3 h-3 duration-300" />
        </AccordionHeader>
        <AccordionBody>
          <CheckBox label="۲.۱ ولت" counter={18} />
          <CheckBox label="۳.۱ ولت" counter={5} />
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader className="w-full flex justify-between items-center py-6 border-t border-NeutralN30">
          قیمت
          <ArrowIcon className="stroke-NeutralN100 w-3 h-3 duration-300" />
        </AccordionHeader>
        <AccordionBody>
          <DoubleRangerInput />
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}

export default ModalFilters;
