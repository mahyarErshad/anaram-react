import React from "react";

function AboutUsTimeLineCard() {
  return (
    <div className="w-full flex justify-center relative">
      <span className="about-page-circle about-page-gradient absolute right-[50%]"></span>
      <div className="w-2/4 flex-col gap-4 border-l border-NeutralN30 pl-6 items-end pb-8">
        <div className="flex justify-start items-center gap-2 w-full max-w-[25.75rem]">
          <span className="text-primary7 text-sm font-semibold">تولد آنارام</span>
          <span className="text-Green7 text-xs font-semibold">تهران</span>
        </div>
        <div className="bg-[#FCFCFC] rounded-2xl p-4 max-w-[25.75rem]">
          <p className="text-sm text-NeutralN80">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</p>
        </div>
      </div>
      <div className="w-2/4 pr-6">
        <span className="text-lg text-white py-[0.875rem] inline-block flex-center w-[11.75rem] rounded-2xl about-page-gradient -translate-y-[35%]">مرداد ۱۳۹۵</span>
      </div>
    </div>
  );
}

export default AboutUsTimeLineCard;
