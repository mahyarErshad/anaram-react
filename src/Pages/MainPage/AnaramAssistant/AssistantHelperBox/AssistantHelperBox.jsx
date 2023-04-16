import React from "react";
import styles from "../styles/style.module.css";

function AssistantHelperBox(props) {
  return (
    <div className={`bg-gradient-to-b ${props.className} ${props.gradientFrom} ${props.gradientTo} after:bg-gradient-to-b rounded-2xl py-3 px-6 z-10 flex justify-start items-center flex-col gap-2 min-h-[11.4375rem] relative ${styles["background-shape"]}`}>
      <span className="poppins text-2xl font-light text-white opacity-50">{props.number}</span>
      <span className="text-2xl font-semibold text-white text-center">{props.title}</span>
      <p className="text-[9px] leading-4 text-NeutralN30 text-center max-w-[8.9375rem]">{props.description}</p>
    </div>
  );
}

export default AssistantHelperBox;
