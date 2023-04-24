import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/arrow-icon-toBottom.svg";

function ProductsPageFilters() {
  return (
    <div className="w-fit">
      <div className="rounded-2xl border border-NeutralN30 py-6 px-4 min-w-[18rem] bg-white flex items-center flex-col gap-6">
        <span className="text-sm text-NeutralN500">فیلترها</span>
        <Accordion className="w-full border-b border-NeutralN30">
          <div>
            <AccordionItem>
              <AccordionHeader className="w-full flex justify-between items-center py-6 border-t border-NeutralN30">
                تکنولوژی ساخت
                <ArrowIcon className="stroke-NeutralN100 w-3 h-3" />
              </AccordionHeader>
              <AccordionBody>تست</AccordionBody>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem>
              <AccordionHeader className="w-full flex justify-between items-center py-6 border-t border-NeutralN30">
                ولتاژ
                <ArrowIcon className="stroke-NeutralN100 w-3 h-3" />
              </AccordionHeader>
              <AccordionBody>تست</AccordionBody>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem>
              <AccordionHeader className="w-full flex justify-between items-center py-6 border-t border-NeutralN30">
                قیمت
                <ArrowIcon className="stroke-NeutralN100 w-3 h-3" />
              </AccordionHeader>
              <AccordionBody>تست</AccordionBody>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default ProductsPageFilters;
