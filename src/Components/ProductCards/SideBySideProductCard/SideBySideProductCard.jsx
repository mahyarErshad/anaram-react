import React from "react";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";
import toman from "../../../assets/images/icons/toman-icon-black.svg";
import {ReactComponent as PlusIcon} from "../../../assets/images/icons/plus-icon.svg";
import {ReactComponent as MinusIcon} from "../../../assets/images/icons/minus-icon.svg";
import styles from "./styles.module.css";

function SideBySideProductCard(props) {
  return (
    <figure className={`${styles.card} flex gap-2 py-5 pr-3 pl-6 border-y border-NeutralN20 w-[21.875rem]`}>
      <img className="w-[5.1875rem] h-[7.6875rem]" src={props.image} alt={props.title} />
      <div className="flex flex-col gap-5">
        <figcaption className="text-xs leading-5 font-semibold">{props.title}</figcaption>
        <div className="flex-center gap-2 self-end">
          <span className="text-base font-semibold">{separateNumberByThousand(props.price)}</span>
          <img className="w-4" src={toman} alt="تومان" />
        </div>
        <div className="flex justify-start items-center">
          <button></button>
        </div>
      </div>
    </figure>
  );
}

export default SideBySideProductCard;
