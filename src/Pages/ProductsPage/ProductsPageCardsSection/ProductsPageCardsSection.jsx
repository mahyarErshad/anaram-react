import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReactComponent as SettingsIcon } from "../../../assets/images/icons/settings-icon.svg";

function ProductsPageCardsSection() {
  return (
    <div className="w-full max-md:mt-6 md:mt-12">
      <Tab>
        <Tabs>
          <SettingsIcon />
          <span></span>
          <TabList></TabList>
        </Tabs>
        <TabPanel></TabPanel>
      </Tab>
    </div>
  );
}

export default ProductsPageCardsSection;
