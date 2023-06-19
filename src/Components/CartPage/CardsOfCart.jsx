import React from "react";
import batteryImage from "../../assets/images/data/SingleProductSwiperImage/battery.png";
import styles from "./styles.module.css";

function CardsOfCart() {
  return (
    <figure className={`relative grid grid-rows-4 gap-6 pt-6 border-t border-NeutralN30 ${styles.card}`}>
      <img src={batteryImage} alt="Varta Battery" className="row-span-3 max-h-[12.5rem]" />
      <h2 className="text-NeutralN500 text-lg font-semibold">باتری نیم قلمی آلکالاین وارتا Longlife Power بسته 6 عددی</h2>
    </figure>
  );
}

export default CardsOfCart;
