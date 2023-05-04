import React from "react";

const FooterAddress = ({ icon, text, href, target }) => (
  <a href={href} target={target} rel="noreferrer" className="w-fit flex items-center gap-2 not-italic group">
    {icon}
    <p className="text-sm text-NeutralN90 group-hover:text-primary6 duration-300">{text}</p>
  </a>
);

export default FooterAddress;
