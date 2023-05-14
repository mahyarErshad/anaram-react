import React from "react";
import { separateNumberByThousand } from "../../../../lib/function/convertToPersianDigits";

const ProductCardDiscountSection = ({ percentage }) => <span className="discount-percentage-icon text-white absolute -top-1 -right-1 h-[2.1875rem] w-[2.1875rem] flex-center text-[0.8125rem] font-normal">{separateNumberByThousand(percentage)}٪</span>;

export default ProductCardDiscountSection;
