import React from "react";
import styles from "../styles/style.module.css";

const AssistantHelperBox = ({ className, gradientFrom, gradientTo, number, title, description }) => (
  <div className={`bg-gradient-to-b ${className} ${gradientFrom} ${gradientTo} after:bg-gradient-to-b rounded-2xl py-3 px-6 z-10 flex justify-start items-center flex-col gap-2 min-h-[11.4375rem] relative ${styles["background-shape"]}`}>
    <span className="poppins text-2xl font-light text-white opacity-50">{number}</span>
    <span className="text-2xl font-semibold text-white text-center">{title}</span>
    <p className="text-[0.5625rem] leading-4 text-NeutralN30 text-center max-w-[8.9375rem]">{description}</p>
  </div>
);

export default AssistantHelperBox;
