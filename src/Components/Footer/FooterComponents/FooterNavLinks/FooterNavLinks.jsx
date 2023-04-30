import React from "react";

const FooterNavLinks = ({ data }) => (
  <div className="flex-col gap-4">
    <span className="text-base text-primary6 pb-3 border-b-2 border-NeutralN40 font-semibold whitespace-nowrap">
      {data[0].title}
    </span>
    <ul className="flex-col gap-3">
      {data[0].navLinks.map((item, index) => (
        <li key={index} className="text-sm text-NeutralN200">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterNavLinks;
