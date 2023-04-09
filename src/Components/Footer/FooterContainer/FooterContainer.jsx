import React from "react";
import styles from "../styles/styles.module.css";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";

function FooterContainer() {
  return (
    <footer className=" bg-NeutralN20 pt-10 pb-16 px-4">
      <section className={`${styles.footer} w-full max-w-[101.875rem] mx-auto`}>
        <Logo />
      </section>
    </footer>
  );
}

export default FooterContainer;
