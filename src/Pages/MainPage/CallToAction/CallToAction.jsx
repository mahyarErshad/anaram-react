import React from "react";
import styles from "./styles.module.css";
import PrimaryButton from "../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";

function CallToAction() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className={`${styles.container} w-full h-[12.25rem] mt-16 flex-center flex-col gap-8 px-4`}>
      <h4 className="text-white font-semibold text-lg">از تخفیف ها و جدیدترین های آنارام با خبر شوید.</h4>
      <form onSubmit={handleSubmit} className={`${styles.form} pl-2 bg-NeutralN10 rounded-[5px] h-12 w-full max-w-[26.5625rem] flex-center gap-2`}>
        <input dir="auto" type="text" className="border-0 pr-2 outline-0 flex-grow placeholder:text-right h-full" placeholder="ایمیل خود را وارد کنید." />
        <PrimaryButton text="ثبت ایمیل" className="py-2 px-4 text-xs" />
      </form>
    </section>
  );
}

export default CallToAction;
