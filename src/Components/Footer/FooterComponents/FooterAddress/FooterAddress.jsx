import React from "react";

const FooterAddress = ({ icon, text }) => (
  <div className="flex items-center gap-2 not-italic">
    {icon}
    <p className="text-sm text-NeutralN90">{text}</p>
  </div>
);

export default FooterAddress;
