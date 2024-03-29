import React from "react";
import stage from "../../../assets/images/data/battery-categories/stage.png";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import goToTop from "../../../lib/function/goToTop";

const BatteryCategoriesCard = ({ data }) => {
  const { image, text } = data;
  return (
    <Link onClick={goToTop} to="/products">
      <figure className={`flex-center flex-col cursor-pointer max-lg:mt-6 ${styles.card}`}>
        <img className="mb-2 max-h-[5.75rem] object-contain transition-all duration-300" src={image} alt={text} />
        <img className="mb-3" src={stage} alt="stage for batteries" />
        <figcaption className="text-NeutralN300 text-base">{text}</figcaption>
      </figure>
    </Link>
  );
};

export default BatteryCategoriesCard;
