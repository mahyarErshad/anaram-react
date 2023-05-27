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
        <span className="about-page-circle"></span>
      </section>
    </>
  );
}

export default AboutUs;
