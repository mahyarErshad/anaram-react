import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReactComponent as SettingsIcon } from "../../../assets/images/icons/settings-icon.svg";
import styles from "./styles.module.css"

function ProductsPageCardsSection() {
  return (
    <div className="w-full max-md:mt-6 md:mt-12">
      <Tab>
        <Tabs className="flex justify-start items-center gap-4">
          <SettingsIcon />
          <span className="text-NeutralN500 text-sm">مرتب سازی:</span>
          <div>
            <TabList className={`${styles.tablist}`}>پرفروش‌ ترین</TabList>
          </div>
        </Tabs>
        <TabPanel></TabPanel>
      </Tab>
    </div>
  );
}

export default ProductsPageCardsSection;
