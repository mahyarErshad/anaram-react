import React from "react";
import SmallButton from "../../../Components/Utils/Buttons/SmallButton/SmallButton"

function SingleProductImageSection() {
  return (
    <section className="flex justify-start items-center gap-3">
      <div className="flex-center flex-col gap-4">
        <SmallButton className="p-3 bg-NeutralN10" icon={<UserIconBlack />} />
      </div>
    </section>
  );
}

export default SingleProductImageSection;
