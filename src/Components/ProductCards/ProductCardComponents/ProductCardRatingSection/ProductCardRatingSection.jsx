import React from "react";
import { ReactComponent as StarIcon } from "../../../../assets/images/icons/product-card-star.svg";
import { separateNumberByThousand } from "../../../../lib/function/convertToPersianDigits";

const ProductCardRatingSection = ({ rating }) => (
  <div className="absolute -top-1 -left-1 flex-center gap-1">
    <span className="font-semibold text-xs text-primary6">{separateNumberByThousand(rating)}</span>
    <StarIcon />
  </div>
);

export default ProductCardRatingSection;
