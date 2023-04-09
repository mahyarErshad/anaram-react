import React from "react";

function FooterNavLinks({ data }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-base text-primary6 pb-3 border-b-2 border-NeutralN40 font-semibold">{data.title}</span>
      <ul className="flex flex-col justify-start items-start gap-3">
        {data.navLinks.map((item, index) => {
          return (
            <li key={index} className="text-sm text-NeutralN200 font-semibold">
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterNavLinks;
