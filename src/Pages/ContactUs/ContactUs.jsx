import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section className="w-full flex-center gap-6 px-4 pt-20 pb-72">
      <ContactDetails />
      <ContactForm />
    </section>
  );
}

export default ContactUs;
