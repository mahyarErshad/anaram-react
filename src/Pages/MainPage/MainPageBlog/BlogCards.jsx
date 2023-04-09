import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/icons/carousel-button-arrow.svg";
import styles from "./style.module.css"
import image from "../../../assets/images/data/blog-cards/battery.jpg";

function BlogCards() {
  return (
    <figure className={`${styles.card} rounded-2xl p-4 bg-white border border-primary1 cursor-pointer`}>
      <img className="h-2/4 rounded-lg" src={image} alt="" />
      <figcaption className="text-right text-sm font-semibold text-NeutralN600 mt-4">علت شارژ نشدن باتری های موبایل</figcaption>
      <p className="text-[0.6875rem] text-right w-full leading-6 mt-4 max-w-[17.5rem] text-NeutralN100">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
      <div className="mt-8 w-full flex justify-between items-center">
        <span className="text-[0.5625rem] text-NeutralN80">۱۴۰۱/۰۷/۱۹</span>
        <div className="flex-center gap-2">
          <span className="text-sm text-NeutralN80">مطالعه مقاله</span>
          <Icon className="stroke-NeutralN80 w-5 h-5" />
        </div>
      </div>
    </figure>
  );
}

export default BlogCards;
