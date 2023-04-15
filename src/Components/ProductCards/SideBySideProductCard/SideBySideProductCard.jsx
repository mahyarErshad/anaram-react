import React from "react";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";
import toman from "../../../assets/images/icons/toman-icon-black.svg";
import styles from "./styles.module.css"

function SideBySideProductCard(props) {
  return (
    <figure className={`flex py-5 pr-3 pl-6 border-y border-NeutralN20 w-[21.875rem]`}>
      <img className="w-[6.6875rem]" src={props.image} alt={props.title} />
      <div className="flex flex-col gap-5">
        <figcaption className="text-xs leading-5 font-semibold">{props.title}</figcaption>
        <div className="flex-center gap-2 self-end">
          <span className="text-base font-semibold">{separateNumberByThousand(props.price)}</span>
          <img className="w-4" src={toman} alt="تومان" />
        </div>
      </div>
    </figure>
  );
}

export default SideBySideProductCard;
