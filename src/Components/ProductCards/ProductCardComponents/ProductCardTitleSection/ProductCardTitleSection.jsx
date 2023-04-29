import React from "react";

const ProductCardTitleSection = ({ title, className }) => <figcaption className={`text-xs font-semibold sm:max-w-[11rem] leading-[1.125rem] text-NeutralN600 sm:mb-4 text-right ${className}`}>{title}</figcaption>;

export default ProductCardTitleSection;
