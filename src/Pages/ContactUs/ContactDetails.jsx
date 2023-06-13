import React from "react";
import { ReactComponent as SupportHeadphone } from "../../assets/images/icons/support-headphone.svg";
import { ReactComponent as SupportPhone } from "../../assets/images/icons/support-phone.svg";

function ContactDetails() {
  return (
    <section className="bg-white p-6 rounded-2xl w-full max-w-[40.4375rem] flex-col lg:max-h-[43.25rem]">
      <div className="flex justify-start items-center gap-3 mb-5">
        <SupportHeadphone />
        <span className="font-semibold text-xl text-primary6">پشتیبانی</span>
      </div>
      <p className="text-sm text-Gray4 mb-12">۷ روز هفته، ۲۴ ساعت روز، پاسخگوی تماس های شما هستیم.</p>
      <div className="flex-col">
        <div className="flex justify-between items-center">
          <span className="text-sm text-Gray2">پشتیبانی</span>
          <span className="text-sm text-Gray4">مهیار ارشاد</span>
          <div className="flex-center gap-1">

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
