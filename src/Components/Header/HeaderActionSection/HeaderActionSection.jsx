import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import PrimaryButton from "../../Utils/Buttons/PrimaryButton/PrimaryButton";
import SearchBox from "../../Utils/SearchBox/SearchBox";
import { ReactComponent as UserIcon } from "../../../assets/images/icons/user-icon.svg";
import { ReactComponent as BagIcon } from "../../../assets/images/icons/bag-icon.svg";
import SmallButton from "../../Utils/Buttons/SmallButton/SmallButton";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/prev-icon.svg";

function HeaderActionSection() {
  return (
    <div className="flex justify-between items-center w-full max-w-[101.5625rem] self-center">
      <div className="flex-center gap-6 w-2/4">
        <Logo />
        <SearchBox className="flex-grow" />
      </div>
      <div className="flex-center gap-4 relative">
        <PrimaryButton text="ورود / ثبت نام" icon={<UserIcon />} />
        <SmallButton className="p-3 bg-NeutralN10" icon={<BagIcon stroke="#575757" />} />
        <div className="flex flex-col absolute left-0 bottom-0 bg-white border border-NeutralN10 rounded-2xl">
          <div className="p-4 flex justify-between items-center w-full">
            <span className="text-[0.5625rem] text-NeutralN60">۳ محصول</span>
            <div className="flex-center gap-3 text-primary6">
              <span className="text-xs font-semibold">مشاهده سبد خرید</span>
              <ArrowIcon color="#1a4499" className="mirror" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderActionSection;
