import React from "react";

const FooterAddress = ({ icon, text, href }) => (
  <a href={href} className="flex items-center gap-2 not-italic">
    {icon}
    <p className="text-sm text-NeutralN90">{text}</p>
  </a>
);

export default FooterAddress;
