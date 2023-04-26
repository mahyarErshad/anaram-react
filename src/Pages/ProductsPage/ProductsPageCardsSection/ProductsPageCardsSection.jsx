import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function ProductsPageCardsSection() {
  return (
    <div className="w-full max-md:mt-6 md:mt-12">
      <Tab>
        <Tabs>
          <TabList></TabList>
        </Tabs>
        <TabPanel></TabPanel>
      </Tab>
    </div>
  );
}

export default ProductsPageCardsSection;
