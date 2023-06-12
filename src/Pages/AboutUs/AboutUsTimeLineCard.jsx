import React from "react";

function AboutUsTimeLineCard({ title, city, description, date, leftPattern }) {
  const borderClass = !leftPattern ? "border-l items-end" : "order-2 items-start md:pr-6 border-r";
  const alignClass = leftPattern ? "md:pl-6 flex justify-end items-start" : "md:pr-6";

  return (
    <div className="w-full flex max-md:flex-col max-md:items-center justify-center relative about-us-timeLine-card">
      <span className="about-page-circle about-page-gradient absolute right-[50%] max-md:hidden"></span>
      <div className={`about-us-timeLine-card__border w-2/4 flex-col gap-4 max-md:gap-6 border-NeutralN30 ${borderClass} md:pl-6 md:pb-12 max-md:border-none max-md:w-full`}>
        <div className="flex justify-start max-md:justify-center items-center gap-2 w-full md:max-w-[25.75rem] max-md:mt-3">
          <span className="text-primary7 text-sm font-semibold">{title}</span>
          <span className="text-Green7 text-xs font-semibold">{city}</span>
        </div>
        <div className="bg-[#FCFCFC] rounded-2xl p-4 max-md:w-full md:max-w-[25.75rem]">
          <p className="text-sm text-NeutralN80">{description}</p>
        </div>
      </div>
      <div className={`w-2/4 max-md:-order-1 max-md:flex max-md:justify-center ${alignClass}`}>
        <span className="text-lg text-white py-[0.875rem] inline-block flex-center w-[11.75rem] rounded-2xl about-page-gradient md:-translate-y-[35%]">{date}</span>
      </div>
      <div className="h-20 w-full bg-yellow-500 order-10 md:hidden">

      </div>
    </div>
  );
}

export default AboutUsTimeLineCard;
