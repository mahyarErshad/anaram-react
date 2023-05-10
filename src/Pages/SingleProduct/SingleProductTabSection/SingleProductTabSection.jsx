import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./styles.module.css";

function SingleProductTabSection() {
  return (
    <section className="large-container p-10 flex-col">
      <Tabs>
        <TabList className="flex gap-10 border-b border-NeutralN30 text-sm text-NeutralN500 font-medium">
          <Tab className={`${styles.tab} relative pb-4`}>مشخصات</Tab>
          <Tab className={`${styles.tab} relative pb-4`}>نظرات</Tab>
        </TabList>
        <TabPanel>sfsdfsfgdsfg</TabPanel>
        <TabPanel>a324423</TabPanel>
      </Tabs>
    </section>
  );
}

export default SingleProductTabSection;
