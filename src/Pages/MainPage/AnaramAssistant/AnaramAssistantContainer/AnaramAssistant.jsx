import React from "react";
import styles from "../styles/style.module.css";
import AssistantHelperBox from "../AssistantHelperBox/AssistantHelperBox";

function AnaramAssistant() {
  return (
    <section className={`container ${styles.container} lg:min-h-[36.0625rem] mt-28 bg-white rounded-2xl relative py-12`}>
      <h2 className="font-bold text-[1.75rem] text-NeutralN500 bg-background absolute top-0 lg:right-12 -translate-y-[50%] px-10 py-4 rounded-b-2xl">
        دستیار <strong className="text-primary6">آنارام</strong>
      </h2>
      <p className="max-w-[71.75rem] text-base text-NeutralN300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
      <div className="flex-center gap-6 mt-[2.5rem]">
        <AssistantHelperBox number="1" title="انتخاب دستگاه" description="دستگاهی که میخواهی برایش باتری بخری را انتخاب کن" />
      </div>
    </section>
  );
}

export default AnaramAssistant;
