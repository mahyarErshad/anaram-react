import React from "react";
import styles from "../styles/style.module.css"

function AssistantHelperBox() {
  return (
    <div className={`bg-gradient-to-b from-[#5F34CC] to-[#22134A] rounded-2xl py-3 px-6 z-10 flex justify-start items-center flex-col gap-2 min-h-[11.4375rem] relative ${styles["background-shape"]}`}>
      <span className="poppins text-2xl font-light text-white opacity-50">1</span>
      <span className="text-2xl font-semibold text-white ">انتخاب دستگاه</span>
      <p className="text-[9px] text-NeutralN30 max-w-[8.9375rem]">دستگاهی که میخواهی برایش باتری بخری را انتخاب کن</p>
    </div>
  );
}

export default AssistantHelperBox;
