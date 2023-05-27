import React from "react";
import image from "../../assets/images/about-us-page-image.jpg";

function AboutUs() {
  return (
    <>
      <section className="container bg-white pb-9 pt-14 my-10 gap-10 rounded-2xl">
        <h1 className="font-semibold text-xl">
          فروشگاه اینترنتی <strong className="text-primary6">آنارام</strong>
        </h1>
        <p className="text-base text-NeutralN300 max-w-[68.5rem] max-lg:text-center">فروشگاه اینترنتی آنارام، فروشگاه تخصصی محصولات وارتا آلمان (با سابقه بیش از 130 ساله در تولید تخصصی انواع باتری) ، فعالیت خود را در سال 1400 آغاز نمود. در این فروشگاه باتری شارژی ، قلمی، نیم قلمی، سکه ای، سایز بزرگ و سایز متوسط از برند وارتا و باتری‌های تخصصی همانند باتری سمعک از برند ریواک (ریواک از برندهای زیر مجموعه برند وارتا آلمان است) و سایر باتری های تخصصی، عرضه می‌گردد</p>
        <img src={image} alt="A furnished office" />
      </section>
      <section className="container bg-white rounded-2xl pt-14 pb-24 mb-24">
        <h2 className="font-semibold text-xl">
          داستان <strong className="text-primary6">آنارام</strong>
        </h2>
        <div className="w-full mt-2 flex justify-center relative">
          <span className="about-page-circle about-page-gradient absolute right-[50%]">
            <span className="about-page-circle__horizontal-line right-[-6.25rem]"></span>
            <span className="about-page-circle__horizontal-line right-4"></span>
          </span>
          <div className="w-2/4 h-20 border-l border-NeutralN30"></div>
          <div className="w-2/4 h-20"></div>
        </div>
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
      </section>
    </>
  );
}

export default AboutUs;
