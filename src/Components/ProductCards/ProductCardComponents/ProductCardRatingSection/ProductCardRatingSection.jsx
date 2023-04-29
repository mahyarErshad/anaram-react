import React from "react";
import { ReactComponent as StarIcon } from "../../../../assets/images/icons/product-card-star.svg";
import { separateNumberByThousand } from "../../../../lib/function/convertToPersianDigits";

const ProductCardRatingSection = ({ rating, position }) => {
  const topLeft = position || "-top-1 -left-1";
  return (
    <div className={`absolute ${topLeft} flex-center gap-1`}>
      <span className="font-semibold text-xs text-primary6">{separateNumberByThousand(rating)}</span>
      <StarIcon />
    </div>
  );
};

export default ProductCardRatingSection;
