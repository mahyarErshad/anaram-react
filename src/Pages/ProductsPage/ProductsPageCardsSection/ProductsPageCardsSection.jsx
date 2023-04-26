import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReactComponent as SettingsIcon } from "../../../assets/images/icons/settings-icon.svg";
import "./styles.css";

function ProductsPageCardsSection() {
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
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">محبوب‌ترین</Tab>
          </div>
        </TabList>
        <TabPanel>
          <figure>
            
          </figure>
        </TabPanel>
        <TabPanel>
          <h1>2</h1>
        </TabPanel>
        <TabPanel>
          <h1>3</h1>
        </TabPanel>
        <TabPanel>
          <h1>4</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ProductsPageCardsSection;
