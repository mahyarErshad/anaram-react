import React from "react";
import SmallButton from "../../../Components/Utils/Buttons/SmallButton/SmallButton";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/heart-icon.svg";
import { ReactComponent as CompareIcon } from "../../../assets/images/icons/compare-arrows.svg";
import { ReactComponent as CompareIcon } from "../../../assets/images/icons/presentation-chart.svg";

function SingleProductImageSection() {
  return (
    <section className="flex justify-start items-center gap-3">
      <div className="flex-center flex-col gap-4">
        <SmallButton className="p-3 bg-NeutralN10" icon={<HeartIcon />} />
        <SmallButton className="p-3 bg-NeutralN10" icon={<CompareIcon />} />
        <SmallButton className="p-3 bg-NeutralN10" icon={<CompareIcon />} />
      </div>
    </section>
  );
}

export default SingleProductImageSection;
