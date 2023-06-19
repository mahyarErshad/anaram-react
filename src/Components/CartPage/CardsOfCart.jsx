import React from "react";
import batteryImage from "../../assets/images/data/product-card/battery.png";
import styles from "./styles.module.css"

function CardsOfCart() {
  return (
    <figure className="relative grid grid-cols-2 gap-6 grid-rows-4">
      <img src={batteryImage} alt="Varta Battery" className="row-span-3" />
    </figure>
  );
}

export default CardsOfCart;
