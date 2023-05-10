import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./styles.module.css";
import { Rating } from "react-simple-star-rating";
import PrimaryButton from "../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";

function SingleProductTabSection() {
  const [rating, setRating] = useState(0);
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
            {data.map(({ Q, A }, index) => {
              return (
                <li key={index} className="flex items-center py-3 px-6 odd:bg-NeutralN10 even:bg-white">
                  <span className="text-NeutralN100 text-sm w-[13.4375rem] border-l border-NeutralN30 h-10 flex items-center">{Q}</span>
                  <span className="text-sm text-NeutralN500 font-semibold flex-grow pr-10">{A}</span>
                </li>
              );
            })}
          </ul>
        </TabPanel>
        <TabPanel className="mt-10 flex items-center">
          <div className="bg-white border border-NeutralN20 rounded-lg p-6 min-w-[21.875rem]">
            <form className="flex-col items-start">
              <label htmlFor="text-area" className="text-NeutralN500 font-semibold text-xs">
                نظر خود را برای ما بنویسید
              </label>
              <textarea id="text-area" className="mt-2 p-3 border border-NeutralN30 rounded-lg w-full resize-none text-xs focus:border-primary2 duration-300 outline-none h-[9.0625rem] mb-8" placeholder="متن نظر ..."></textarea>
              <span className="text-NeutralN500 font-semibold text-xs">امتیاز شما به این محصول</span>
              <div className="mt-2 mb-8 w-full border border-NeutralN30 rounded-lg py-[0.875rem] flex-center">
                <Rating onClick={(rating) => setRating(rating)} initialValue={0} ratingValue={rating} size={40} transition fillColorArray={["#e85d04", "#f48c06", "#faa307", "#ffba08", "#ffd60a"]} />
              </div>
              <PrimaryButton />
            </form>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
}

export default SingleProductTabSection;
