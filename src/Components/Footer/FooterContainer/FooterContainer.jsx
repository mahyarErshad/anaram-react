import React from "react";
import styles from "../styles/styles.module.css";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";

function FooterContainer() {
  return (
    <footer className=" bg-NeutralN20 pt-10 pb-16 px-4">
      <section className={`${styles.footer} w-full max-w-[101.875rem] mx-auto`}>
        <Logo className={styles.logo} />
        <p className={`${styles.description} text-sm text-NeutralN90`}>فروشگاه آنارام نماینده فروش محصولات برند وارتا (Varta) آلمان (دارای ۱۳۰ سال سابقه در تولید انواع باتری) است که فعالیت خود را در سال 1400 آغاز نمود. آنارام دارای نمایندگی باتری وارتا و دیگر محصولات این شرکت است و در این فروشگاه انواع باتری قلمی و نیم قلمی ، باتری شارژی ، باتری سکه ای ، باتری مخصوص مانند باتری دوربین و تلفن و دیگر محصولات برند وارتا از جمله شارژر باتری و چراغ قوه عرضه می گردد.</p>
        <address>

        </address>
      </section>
    </footer>
  );
}

export default FooterContainer;
