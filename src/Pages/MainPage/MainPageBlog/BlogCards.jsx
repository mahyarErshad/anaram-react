import React from "react";
import image from "../../../assets/images/data/blog-cards/battery.jpg";

function BlogCards() {
  return (
    <figure className="rounded-2xl p-[1.125rem] bg-white border border-primary1">
      <img className="h-2/4 rounded-lg" src={image} alt="" />
    </figure>
  );
}

export default BlogCards;
