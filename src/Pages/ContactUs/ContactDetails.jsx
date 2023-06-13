import React from "react";
import { ReactComponent as SupportHeadphone } from "../../assets/images/icons/support-headphone.svg";
import { ReactComponent as SupportPhone } from "../../assets/images/icons/support-phone.svg";

function ContactDetails() {
  const arr = [1, 2, 3];
  return (
    <section className="bg-white p-6 rounded-2xl w-full max-w-[40.4375rem] flex-col lg:max-h-[43.25rem]">
      <div className="flex justify-start items-center gap-3 mb-5">
        <SupportHeadphone />
        <span className="font-semibold text-xl text-primary6">پشتیبانی</span>
      </div>
      <p className="text-sm text-Gray4 mb-12">۷ روز هفته، ۲۴ ساعت روز، پاسخگوی تماس های شما هستیم.</p>
      <div className="flex-col">
        {arr.map((_, index) => {
          return (
            <div className="flex justify-between items-center py-4  border-b border-NeutralN30 first-of-type:pt-0 last-of-type:pb-0 last-of-type:border-none">
              <span className="text-sm text-Gray2">پشتیبانی</span>
              <span className="text-sm text-Gray4">مهیار ارشاد</span>
              <div className="flex-center gap-1">
                <a href="tel:09120343545" className="text-sm text-Gray4 hover:text-primary6 duration-300">09120343545</a>
                <SupportPhone />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ContactDetails;
