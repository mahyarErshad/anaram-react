import React from "react";
import { ReactComponent as ShieldTick } from "../../../assets/images/icons/shield-tick.svg";

function DetailSectionAction() {
  return (
    <section className="justify-self-end bg-NeutralN10 border border-NeutralN20 rounded-2xl pt-10 pb-6 px-6 flex-col gap-7 min-w-[24.375rem]">
      <div className="flex justify-start items-center gap-2 pb-6 border-b border-NeutralN30">
        <ShieldTick />
        <span className="text-sm text-NeutralN100">گارانتی و تضمین اصالت کالا</span>
      </div>
      <div className="flex justify-start items-center gap-2 pb-6 border-b border-NeutralN30">
        <ShieldTick />
        <span className="text-sm text-NeutralN100">گارانتی و تضمین اصالت کالا</span>
      </div>
    </section>
  );
}

export default DetailSectionAction;
