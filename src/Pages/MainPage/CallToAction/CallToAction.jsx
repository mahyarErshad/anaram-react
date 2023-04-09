import React, { useRef } from "react";
import styles from "./styles.module.css";

function CallToAction() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  const input = useRef(null);
  return (
    <section className={`${styles.container} w-full h-[12.25rem] mt-16 flex-center flex-col gap-8 px-4`}>
      <h4 className="text-white font-semibold text-lg">از تخفیف ها و جدیدترین های آنارام با خبر شوید.</h4>
      <form onClick={() => input.current.focus()} onSubmit={() => handleSubmit} className={`${styles.form} p-2 bg-NeutralN10 rounded-[5px] h-12 w-full max-w-[26.5625rem] flex-center gap-2`}>
        <input dir="auto" ref={input} type="text" className="border-0 outline-0 flex-grow placeholder:text-right" placeholder="ایمیل خود را وارد کنید." />
      </form>
    </section>
  );
}

export default CallToAction;
