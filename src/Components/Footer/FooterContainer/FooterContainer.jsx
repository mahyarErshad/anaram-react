import React from "react";
import styles from "../styles/styles.module.css";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as LocationIcon } from "../../../assets/images/icons/location.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/images/icons/phone-icon.svg";
import FooterAddress from "../FooterComponents/FooterAddress/FooterAddress";
import FooterNavLinks from "../FooterComponents/FooterNavLinks/FooterNavLinks";
import { anaramNavLinksData, customerServicesData, helpShopingData } from "../../../lib/footerNavLinksData/footerNavLinksData";
import eNamadImage from "../../../assets/images/icons/e-namad.jpg";
import { Link } from "react-router-dom";
import goToTop from "../../../lib/function/goToTop";

function FooterContainer() {
  return (
    <footer className="bg-NeutralN20 max-md:pt-4 md:pt-10 pb-4 px-4">
      <section className={`max-w-[101.875rem] mx-auto w-full ${styles.footer}`}>
        <Link className="w-fit" onClick={goToTop} to="/">
          <Logo className={`max-md:w-16 ${styles.logo}`} />
        </Link>
        <p className={`text-sm text-NeutralN90 max-w-[29.0625rem] ${styles.description}`}>فروشگاه آنارام نماینده فروش محصولات برند وارتا (Varta) آلمان (دارای ۱۳۰ سال سابقه در تولید انواع باتری) است که فعالیت خود را در سال 1400 آغاز نمود. آنارام دارای نمایندگی باتری وارتا و دیگر محصولات این شرکت است و در این فروشگاه انواع باتری قلمی و نیم قلمی ، باتری شارژی ، باتری سکه ای ، باتری مخصوص مانند باتری دوربین و تلفن و دیگر محصولات برند وارتا از جمله شارژر باتری و چراغ قوه عرضه می گردد.</p>
        <address className={`flex-col gap-3 ${styles.address}`}>
          <FooterAddress icon={<LocationIcon />} text="تهران - بالاتر از میدان ولیعصر - کوی دانش کیان - پلاک ۱۷" target="_blank" href="https://goo.gl/maps/YZsfLFfkWPtmWvDz9" />
          <FooterAddress icon={<PhoneIcon className="h-4 w-4" />} text="74645308 - 023" href="tel:02374645308" />
        </address>
        <nav className={`flex justify-between items-start max-lg:gap-8 ${styles.nav}`}>
          <FooterNavLinks data={helpShopingData} />
          <FooterNavLinks data={customerServicesData} />
          <FooterNavLinks data={anaramNavLinksData} />
        </nav>
        <div className={`flex gap-2 flex-wrap ${styles.eNamad}`}>
          {[...Array(3)].map((_, index) => (
            <img key={index} className="w-[6.5625rem] h-[7.125rem]" src={eNamadImage} alt="e-namad" />
          ))}
        </div>
      </section>
    </footer>
  );
}

export default FooterContainer;
