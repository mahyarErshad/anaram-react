import React from "react";
import PrimaryButton from "../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import { ReactComponent as CartIcon } from "../../../assets/images/icons/bag-icon.svg";
import { separateNumberByThousand } from "../../../lib/function/convertToPersianDigits";
import { ReactComponent as TomanIcon } from "../../../assets/images/icons/toman-icon-black.svg";

function SingleProductSmallScreenAction() {
  return (
    <section className="w-full bg-white rounded-lg px-3 pt-3 pb-4 flex-col">
      <div className="flex justify-between items-center px-6">
        <PrimaryButton icon={<CartIcon className="stroke-white" />} text="افزودن به سبد" />
        <div className="flex items-center gap-2">
          <span className="text-NeutralN500 font-semibold text-lg">{separateNumberByThousand(124000)}</span>
          <TomanIcon className="w-5 h-4" />
        </div>
      </div>
    </section>
  );
}

export default SingleProductSmallScreenAction;
