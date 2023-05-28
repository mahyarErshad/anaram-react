import React from "react";
import image from "../../assets/images/about-us-page-image.jpg";
import AboutUsTimeLineCard from "./AboutUsTimeLineCard";

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
        <AboutUsTimeLineCard title="تولد آنارام" city="تهران" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده" date="مرداد ۱۳۹۵" />
        <AboutUsTimeLineCard leftPattern title="واردات باتری" city="برلین" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده" date="شهریور ۱۳۹۵" />
      </section>
    </>
  );
}

export default AboutUs;
