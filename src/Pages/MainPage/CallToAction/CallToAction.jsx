import React from "react";
import styles from "./styles.module.css";

function CallToAction() {
  return (
    <section className={`${styles.container} w-full h-[12.25rem] mt-16 flex-center flex-col gap-8`}>
      <h4 className="text-white font-semibold text-lg">از تخفیف ها و جدیدترین های آنارام با خبر شوید.</h4>
    </section>
  );
}

export default CallToAction;
