import React from "react";
import image from "../../../assets/images/data/blog-cards/battery.jpg";

function BlogCards() {
  return (
    <figure className="rounded-2xl p-[1.125rem] bg-white border border-primary1">
      <img className="h-2/4 rounded-lg" src={image} alt="" />
      <h3 className="text-right text-sm text-NeutralN600 mt-4">زمان شارژ نگه داشتن باتری ها را افزایش دهید</h3>
    </figure>
  );
}

export default BlogCards;
