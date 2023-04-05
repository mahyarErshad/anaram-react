import React from 'react'
import { ReactComponent as StarIcon } from "../../../../assets/images/icons/product-card-star.svg";
import { separateNumberByThousand } from '../../../../lib/function/convertToPersianDigits';

function ProductCardRatingSection({rating}) {
  return (
    <div className="absolute -top-1 -left-1 flex-center gap-[0.125rem]">
    <span className="font-semibold text-xs text-primary6 translate-y-[0.0625rem]">{separateNumberByThousand(rating)}</span>
    <StarIcon />
  </div>
  )
}

export default ProductCardRatingSection