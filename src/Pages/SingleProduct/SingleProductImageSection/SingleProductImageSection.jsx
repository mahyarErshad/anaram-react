import React from "react";
import SmallButton from "../../../Components/Utils/Buttons/SmallButton/SmallButton"
import {ReactComponent as HeartIcon} from "../../../assets/images/icons/heart-icon.svg"

function SingleProductImageSection() {
  return (
    <section className="flex justify-start items-center gap-3">
      <div className="flex-center flex-col gap-4">
        <SmallButton className="p-3 bg-NeutralN10" icon={<HeartIcon />} />
      </div>
    </section>
  );
}

export default SingleProductImageSection;
