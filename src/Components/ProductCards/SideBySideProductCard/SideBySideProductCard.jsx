import React from "react";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";
import toman from "../../../assets/images/icons/toman-icon-black.svg";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/plus-icon.svg";
import { ReactComponent as MinusIcon } from "../../../assets/images/icons/minus-icon.svg";
import styles from "./styles.module.css";
import SmallButton from "../../Utils/Buttons/SmallButton/SmallButton";
import ProductCardPriceSection from "../ProductCardComponents/ProductCardPriceSection/ProductCardPriceSection";

function SideBySideProductCard(props) {
  return (
    <figure className={`${styles.card} flex gap-2 py-5 pr-3 pl-6 border-y border-NeutralN20 w-[21.875rem]`}>
      <img className="w-[5.1875rem] h-[7.6875rem]" src={props.image} alt={props.title} />
      <div className="flex flex-col gap-[0.65rem]">
        <figcaption className="text-xs leading-5 font-semibold">{props.title}</figcaption>
        <div className="flex justify-end gap-8">
          {props.discountCard && <ProductCardPriceSection price={80000} discountText />}
          <ProductCardPriceSection price={120000} />
        </div>
        <div className="flex justify-start items-center">
          <SmallButton className="bg-NeutralN20 py-2 px-2" icon={<PlusIcon />} />
          <span className="font-bold text-base text-NeutralN500 flex-center py-2 px-4">{separateNumberByThousand(props.amount)}</span>
          <SmallButton className="bg-NeutralN20 py-2 px-2" icon={<MinusIcon />} />
        </div>
      </div>
    </figure>
  );
}

export default SideBySideProductCard;
