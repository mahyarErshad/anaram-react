import React from "react";
import styles from "../styles/styles.module.css";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as LocationIcon } from "../../../assets/images/icons/location.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/images/icons/phone-icon.svg";
import FooterAddress from "../FooterComponents/FooterAddress/FooterAddress";

function FooterContainer() {
  return (
    <footer className=" bg-NeutralN20 pt-10 pb-16 px-4">
      <section className={`${styles.footer} w-full max-w-[101.875rem] mx-auto`}>
        <Logo className={styles.logo} />
        <p className={`${styles.description} text-sm text-NeutralN90`}>فروشگاه آنارام نماینده فروش محصولات برند وارتا (Varta) آلمان (دارای ۱۳۰ سال سابقه در تولید انواع باتری) است که فعالیت خود را در سال 1400 آغاز نمود. آنارام دارای نمایندگی باتری وارتا و دیگر محصولات این شرکت است و در این فروشگاه انواع باتری قلمی و نیم قلمی ، باتری شارژی ، باتری سکه ای ، باتری مخصوص مانند باتری دوربین و تلفن و دیگر محصولات برند وارتا از جمله شارژر باتری و چراغ قوه عرضه می گردد.</p>
        <address className={`${styles.address} flex flex-col gap-3`}>
          <FooterAddress icon={<LocationIcon />} text="خیابان شریعتی، خیابان سهروردی شمالی، کوچه پنجم، پلاک ۱۲، واحد ۳" />
          <FooterAddress icon={<PhoneIcon className="h-4 w-4" />} text="74645308 - 023" />
        </address>
        <nav className="flex justify-between items-start">
        <span className="text-base text-primary6 py-4 border-b"></span>
            <ul>
                <li>

                </li>
            </ul>
        </nav>
      </section>
    </footer>
  );
}

export default FooterContainer;
