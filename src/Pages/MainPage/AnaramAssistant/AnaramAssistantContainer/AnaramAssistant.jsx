import React from "react";
import styles from "../styles/style.module.css";

function AnaramAssistant() {
  return (
    <section className={`container ${styles.container} lg:min-h-[36.0625rem] mt-28 bg-white rounded-b-2xl relative`}>
      <div className="flex gap-0 absolute top-0 right-0">
        <span className="lg:w-12 rounded-t-2xl"></span>
        <span className="font-bold text-[1.75rem] text-NeutralN500 lg:right-12 -translate-y-[50%] rounded-b-2xl">
          دستیار <strong className="text-primary6">آنارام</strong>
        </span>
        <span></span>
      </div>
    </section>
  );
}

export default AnaramAssistant;
