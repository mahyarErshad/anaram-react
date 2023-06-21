import React, { useState } from "react";
import batteryImage from "../../assets/images/data/SingleProductSwiperImage/battery.png";
import styles from "./styles.module.css";
import ActionSectionQuantity from "../../Pages/SingleProduct/SingleProductDetailSection/ActionSectionQuantity";
import SingleProductIncreaseDecreaseButton from "../Utils/Buttons/SingleProductIncreaseDecreaseButton/SingleProductIncreaseDecreaseButton";
import { ReactComponent as TrashIcon } from "../../assets/images/icons/trash-icon.svg";
import { Link } from "react-router-dom";

function CardsOfCart({ onClick }) {
  const [state, setState] = useState(1);
  const href = "/products/product/id-1234";
  return (
    <figure className={`relative mb-8 grid gap-6 pt-6 border-t border-NeutralN30 first-of-type:border-t-0 ${styles.card}`}>
      <Link className="row-span-3" to={href}>
        <img src={batteryImage} alt="Varta Battery" className="max-h-[12.5rem]" />
      </Link>
      <Link to={href}>
        <h2 className="text-NeutralN500 text-lg font-semibold hover:text-primary6 duration-300">باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی</h2>
      </Link>
      <ActionSectionQuantity className="max-w-fit gap-6 border-none pb-0" title="قیمت محصول :" quantity={124000} toman />
      <SingleProductIncreaseDecreaseButton state={state} setState={setState} />
      <ActionSectionQuantity className="max-w-fit gap-6 border-none pb-0 col-start-2" title="قیمت کل :" quantity={124000 * state} toman />
      <button onClick={onClick} className="absolute top-6 left-0 flex-center gap-1 p-2 bg-NeutralN10 rounded-2xl">
        <TrashIcon />
        <span className="text-NeutralN60 text-xs">حذف محصول</span>
      </button>
    </figure>
  );
}

export default CardsOfCart;
