import React from "react";
import { ReactComponent as SupportHeadphone } from "../../assets/images/icons/support-headphone.svg";

function ContactDetails() {
  return (
    <section className="bg-white p-6 rounded-2xl w-full max-w-[40.4375rem] flex-col lg:max-h-[43.25rem]">
      <div className="flex justify-start items-center gap-3 mb-5">
        <SupportHeadphone />
        <span className="font-semibold text-xl text-primary6">پشتیبانی</span>
      </div>
      <p className="text-sm">۷ روز هفته، ۲۴ ساعت روز، پاسخگوی تماس های شما هستیم.</p>
    </section>
  );
}

export default ContactDetails;
