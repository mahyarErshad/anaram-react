import React from "react";
import image from "../../../assets/images/data/blog-cards/battery.jpg";

function BlogCards() {
  return (
    <figure className="rounded-2xl p-4 bg-white border border-primary1">
      <img className="h-2/4 rounded-lg" src={image} alt="" />
      <figcaption className="text-right text-sm font-semibold text-NeutralN600 mt-4">علت شارژ نشدن باتری های موبایل</figcaption>
      <p className="text-[0.6875rem] text-right w-full leading-6 mt-4 max-w-[17.5rem] text-NeutralN100">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
    </figure>
  );
}

export default BlogCards;
