import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section className="w-full flex-center max-lg:flex-col max-md:gap-3 gap-6 max-md:px-3 px-4 pt-20 md:pb-24 lg:pb-72">
      <ContactDetails />
      <ContactForm />
    </section>
  );
}

export default ContactUs;
