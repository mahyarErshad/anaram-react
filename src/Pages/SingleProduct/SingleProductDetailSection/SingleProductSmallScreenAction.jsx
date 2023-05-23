import React from "react";
import PrimaryButton from "../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import { ReactComponent as CartIcon } from "../../../assets/images/icons/bag-icon.svg";

function SingleProductSmallScreenAction() {
  return (
    <section className="w-full bg-white rounded-lg px-3 pt-3 pb-4 flex-col">
      <div className="flex justify-between items-center px-6">
        <PrimaryButton icon={<CartIcon className="stroke-white" />} text="افزودن به سبد" />
      </div>
    </section>
  );
}

export default SingleProductSmallScreenAction;
