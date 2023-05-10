import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function SingleProductTabSection() {
  return (
    <section className="large-container p-10 flex-col">
      <Tabs>
        <TabList className="flex gap-10 pb-4 border-b border-NeutralN30 text-sm text-NeutralN500 font-medium">
          <Tab>adada</Tab>
          <Tab>sfsfsdgfs</Tab>
        </TabList>
        <TabPanel>sfsdfsfgdsfg</TabPanel>
        <TabPanel>a324423</TabPanel>
      </Tabs>
    </section>
  );
}

export default SingleProductTabSection;
