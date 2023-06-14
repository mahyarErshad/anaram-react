import React from "react";
import { ReactComponent as MessageIcon } from "../../assets/images/icons/contact-form-message-icon.svg";

function ContactForm() {
  return (
    <section className="bg-white p-6 rounded-2xl w-full max-w-[40.4375rem] flex-col lg:max-h-[43.25rem]">
      <div className="flex justify-start items-center gap-3 mb-6">
        <MessageIcon />
        <span className="font-semibold text-xl text-primary6">پشتیبانی</span>
      </div>
      <p className="text-Gray4 text-sm">با ما در تماس باشید.</p>
      <form onSubmit={(e) => e.preventDefault} className="flex-col gap-6">
        <div className="flex-center gap-4">

        </div>
      </form>
    </section>
  );
}

export default ContactForm;
