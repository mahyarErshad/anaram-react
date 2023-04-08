import React from "react";
import styles from "../styles/style.module.css";

function AnaramAssistant() {
  return (
    <section className={`container ${styles.container} lg:min-h-[36.0625rem] mt-28 bg-white rounded-2xl relative`}>
      <div className="flex gap-0 absolute top-0 lg:right-12">
        <span className="font-bold text-[1.75rem] text-NeutralN500 bg-background lg:right-12 -translate-y-[50%] px-10 py-4 rounded-b-2xl flex-shrink-0">
          دستیار <strong className="text-primary6">آنارام</strong>
        </span>
      </div>
    </section>
  );
}

export default AnaramAssistant;
