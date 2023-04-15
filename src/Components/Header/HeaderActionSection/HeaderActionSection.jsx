import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import PrimaryButton from "../../Utils/Buttons/PrimaryButton/PrimaryButton";
import SearchBox from "../../Utils/SearchBox/SearchBox";
import { ReactComponent as UserIcon } from "../../../assets/images/icons/user-icon.svg";
import { ReactComponent as BagIcon } from "../../../assets/images/icons/bag-icon.svg";
import SmallButton from "../../Utils/Buttons/SmallButton/SmallButton";
import HeaderShoppingCartModal from "../HeaderShoppingCartModal/HeaderShoppingCartModal";

function HeaderActionSection() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <div className="flex justify-between items-center w-full max-w-[101.5625rem] self-center">
      <div className="flex-center gap-6 w-2/4">
        <Logo />
        <SearchBox className="flex-grow" />
      </div>
      <div className="flex-center gap-4 relative">
        <PrimaryButton text="ورود / ثبت نام" icon={<UserIcon />} />
        <SmallButton className="p-3 bg-NeutralN10" icon={<BagIcon stroke="#575757" />} />
        <HeaderShoppingCartModal open={openCart} />
      </div>
    </div>
  );
}

export default HeaderActionSection;
