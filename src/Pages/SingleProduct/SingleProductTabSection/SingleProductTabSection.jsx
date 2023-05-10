import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./styles.module.css";

function SingleProductTabSection() {
  const data = [
    {
      Q: "نوع باتری",
      A: "کتابی",
    },
    {
      Q: "ولتاژ باتری باتری",
      A: "۹ ولت",
    },
    {
      Q: "نوع تکنولوژی باتری",
      A: "آلکالاین",
    },
    {
      Q: "قابلیت های باتری",
      A: "ماندگاری طولانی",
    },
    {
      Q: "تعداد باتری‌های موجود در پک",
      A: "۱ عدد",
    },
  ];
  return (
    <section className="large-container p-10 flex-col">
      <Tabs>
        <TabList className="flex gap-10 border-b border-NeutralN30 text-sm text-NeutralN500 font-medium">
          <Tab className={`${styles.tab} relative pb-4 cursor-pointer`}>مشخصات</Tab>
          <Tab className={`${styles.tab} relative pb-4 cursor-pointer`}>نظرات</Tab>
        </TabList>
        <TabPanel className="mt-10">
          <ul>
            <li className="flex items-center py-3 px-6 odd:bg-NeutralN10 even:bg-white">
              <span className="text-NeutralN100 text-sm w-[13.4375rem] border-l border-NeutralN30 h-10 flex items-center">نوع باتری</span>
              <span className="text-sm text-NeutralN500 font-semibold flex-grow pr-10">کتابی</span>
            </li>
          </ul>
        </TabPanel>
        <TabPanel className="mt-10">a324423</TabPanel>
      </Tabs>
    </section>
  );
}

export default SingleProductTabSection;
