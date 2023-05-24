import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./styles.module.css";
import SingleProductTable from "./Components/SingleProductTable/SingleProductTable";
import SingleProductComments from "./Components/SingleProductComments/SingleProductComments";

function SingleProductTabSection() {

  return (
    <section className="large-container p-10 flex-col single-product-tab-section">
      <Tabs>
        <TabList className="flex gap-10 border-b border-NeutralN30 text-sm text-NeutralN500 font-medium">
          <Tab className={`${styles.tab} relative pb-4 cursor-pointer`}>مشخصات</Tab>
          <Tab className={`${styles.tab} relative pb-4 cursor-pointer`}>نظرات</Tab>
        </TabList>
        <TabPanel className="mt-10">
          <SingleProductTable />
        </TabPanel>
        <TabPanel className="mt-10 flex items-start gap-14 max-lg:flex-col">
          <SingleProductComments />
        </TabPanel>
      </Tabs>
    </section>
  );
}

export default SingleProductTabSection;
