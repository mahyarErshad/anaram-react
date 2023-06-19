import React from "react";
import batteryImage from "../../assets/images/data/SingleProductSwiperImage/battery.png";
import styles from "./styles.module.css";
import ActionSectionQuantity from "../../Pages/SingleProduct/SingleProductDetailSection/ActionSectionQuantity";
import SingleProductIncreaseDecreaseButton from "../Utils/Buttons/SingleProductIncreaseDecreaseButton/SingleProductIncreaseDecreaseButton";

function CardsOfCart() {
  return (
    <figure className={`relative grid gap-6 pt-6 border-t border-NeutralN30 ${styles.card}`}>
      <img src={batteryImage} alt="Varta Battery" className="row-span-3 max-h-[12.5rem]" />
      <h2 className="text-NeutralN500 text-lg font-semibold">باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی</h2>
      <ActionSectionQuantity className="max-w-fit gap-6 border-none pb-0" title="قیمت محصول :" quantity={124000} toman />
      <SingleProductIncreaseDecreaseButton />
    </figure>
  );
}

export default CardsOfCart;
