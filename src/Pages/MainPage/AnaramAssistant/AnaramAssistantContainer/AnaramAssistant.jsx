import React from "react";
import styles from "../styles/style.module.css";

function AnaramAssistant() {
  return (
    <section className={`container ${styles.container} lg:min-h-[36.0625rem] py-4 mt-28 bg-white rounded-2xl`}>
      <span className="font-bold text-[1.75rem] text-NeutralN500">
        دستیار <strong className="text-primary6">آنارام</strong>
      </span>
    </section>
  );
}

export default AnaramAssistant;
