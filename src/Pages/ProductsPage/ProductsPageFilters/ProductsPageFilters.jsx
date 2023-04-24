import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/arrow-icon-toBottom.svg";
import CheckBox from "../../../Components/Utils/CheckBox/CheckBox";
import DoubleRangerInput from "../../../Components/Utils/DoubleRangerInput/DoubleRangerInput";

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
              <AccordionBody>
                <CheckBox label="آلکاین" counter={24} />
                <CheckBox label="روی کربن" counter={14} />
              </AccordionBody>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem>
              <AccordionHeader className="w-full flex justify-between items-center py-6 border-t border-NeutralN30">
                ولتاژ
                <ArrowIcon className="stroke-NeutralN100 w-3 h-3" />
              </AccordionHeader>
              <AccordionBody>
                <CheckBox label="۲.۱ ولت" counter={18} />
                <CheckBox label="۳.۱ ولت" counter={5} />
              </AccordionBody>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem>
              <AccordionHeader className="w-full flex justify-between items-center py-6 border-t border-NeutralN30">
                قیمت
                <ArrowIcon className="stroke-NeutralN100 w-3 h-3" />
              </AccordionHeader>
              <AccordionBody>
                <DoubleRangerInput />
              </AccordionBody>
            </AccordionItem>
          </div>
        </Accordion>
        <div className="flex w-full justify-start items-start gap-2">
          <input id="exist-only" className="cursor-pointer" type="checkbox" />
          <label className="text-xs text-primary8 font-semibold cursor-pointer" htmlFor="exist-only">
            فقط کالا های موجود را نمایش بده
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductsPageFilters;
