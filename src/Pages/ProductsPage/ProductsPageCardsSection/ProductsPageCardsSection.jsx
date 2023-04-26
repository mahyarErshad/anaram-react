import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReactComponent as SettingsIcon } from "../../../assets/images/icons/settings-icon.svg";
import "./styles.css";
import ProductsPageCards from "./ProductsPageCards/ProductsPageCards";

function ProductsPageCardsSection() {
  const array = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="w-full max-md:mt-6 md:mt-12">
      <Tabs>
        <TabList className="flex justify-start items-center gap-4 mb-4">
          <SettingsIcon />
          <span className="text-NeutralN500 text-sm font-semibold">مرتب سازی:</span>
          <div className="flex-center gap-6">
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">پرفروش‌ترین</Tab>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">ارزان‌ترین</Tab>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">گران‌ترین</Tab>
          </div>
        </TabList>
        <TabPanel className="w-full flex justify-start items-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.map((_, index) => {
            return <ProductsPageCards key={index} />;
          })}
        </TabPanel>
        <TabPanel className="w-full flex justify-start items-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.map((_, index) => {
            return <ProductsPageCards key={index} discountCard />;
          })}
        </TabPanel>
        <TabPanel className="w-full flex justify-start items-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.map((_, index) => {
            return <ProductsPageCards key={index} outOfStock />;
          })}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ProductsPageCardsSection;
