import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import PrimaryButton from "../../Utils/Buttons/PrimaryButton/PrimaryButton";
import SearchBox from "../../Utils/SearchBox/SearchBox";
import { ReactComponent as UserIcon } from "../../../assets/images/icons/user-icon.svg";
import { ReactComponent as UserIconBlack } from "../../../assets/images/icons/user-icon-black.svg";
import { ReactComponent as BagIcon } from "../../../assets/images/icons/bag-icon.svg";
import SmallButton from "../../Utils/Buttons/SmallButton/SmallButton";
import HeaderShoppingCartModal from "../HeaderShoppingCartModal/HeaderShoppingCartModal";
import styles from "../HeaderShoppingCartModal/styles.module.css";

function HeaderActionSection() {
  return (
    <div className="flex justify-between items-center w-full max-w-[101.5625rem] self-center">
      <div className="flex-center gap-6 w-2/4">
        <Logo className="max-md:w-16" />
        <SearchBox className="flex-grow max-lg:hidden" />
      </div>
      <div className="flex-center gap-4 relative">
        <PrimaryButton className="max-md:hidden" text="ورود / ثبت نام" icon={<UserIcon />} />
        <SmallButton className="p-3 bg-NeutralN10 md:hidden" icon={< />} />
        <div className={styles.cartIconWrapper}>
          <SmallButton className="p-3 bg-NeutralN10" icon={<BagIcon stroke="#575757" />} />
          <HeaderShoppingCartModal />
        </div>
      </div>
    </div>
  );
}

export default HeaderActionSection;
