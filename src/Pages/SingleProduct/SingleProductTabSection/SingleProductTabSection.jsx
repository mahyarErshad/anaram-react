import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./styles.module.css";
import { Rating } from "react-simple-star-rating";
import PrimaryButton from "../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import SingleProductTable from "./Components/SingleProductTable/SingleProductTable";

function SingleProductTabSection() {
  const [rating, setRating] = useState(0);
  return (
    <section className="large-container p-10 flex-col">
      <Tabs>
        <TabList className="flex gap-10 border-b border-NeutralN30 text-sm text-NeutralN500 font-medium">
          <Tab className={`${styles.tab} relative pb-4 cursor-pointer`}>مشخصات</Tab>
          <Tab className={`${styles.tab} relative pb-4 cursor-pointer`}>نظرات</Tab>
        </TabList>
        <TabPanel className="mt-10">
        <SingleProductTable />
        </TabPanel>
        <TabPanel className="mt-10 flex items-center gap-14">


        </TabPanel>
      </Tabs>
    </section>
  );
}

export default SingleProductTabSection;
