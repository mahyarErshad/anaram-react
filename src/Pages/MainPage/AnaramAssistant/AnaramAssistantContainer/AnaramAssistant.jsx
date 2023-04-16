import React from "react";
import styles from "../styles/style.module.css";
import AssistantHelperBox from "../AssistantHelperBox/AssistantHelperBox";
import PrimaryButton from "../../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";

function AnaramAssistant() {
  return (
    <section className="w-full max-w-[82.5rem] px-8 flex-center mx-auto">
      <div className={`container ${styles.container} mt-28 bg-white rounded-2xl relative py-12 after:bg-primary6`}>
        <h2 className="font-bold text-[1.75rem] text-NeutralN500 bg-background absolute top-0 lg:right-12 -translate-y-[50%] px-10 py-4 rounded-b-2xl">
          دستیار <strong className="text-primary6">آنارام</strong>
        </h2>
        <p className="max-w-[71.75rem] text-base text-NeutralN300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-lg:grid-rows-2 justify-items-center gap-6 mt-[2.5rem]">
          <AssistantHelperBox number="1" title="انتخاب دستگاه" description="دستگاهی که میخواهی برایش باتری بخری را انتخاب کن" gradientFrom="from-[#5F34CC]" gradientTo="to-[#22134A]" className="max-lg:col-span-full" />
          <AssistantHelperBox number="2" title="انتخاب باتری" description="سایز باتری را انتخاب کن (قلمی ُ نیم قلمی ُ‌کتابی و ...)" gradientFrom="from-[#47A8BD]" gradientTo="to-[#00829E]" className="max-lg:row-start-2" />
          <AssistantHelperBox number="3" title="بقیش باما" description="دستیار آنارام به صورت هوشمند لیستی از باتری هایی که مناسب شما هست را نمایش میده" gradientFrom="from-[#C53950]" gradientTo="to-[#790013]" className="max-lg:row-start-2" />
        </div>
        <PrimaryButton text="بزن بریم" className="mt-16 py-3 px-[4.625rem]" />
      </div>
    </section>
  );
}

export default AnaramAssistant;
