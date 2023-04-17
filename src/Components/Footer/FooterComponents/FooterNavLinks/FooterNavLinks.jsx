import React from "react";

function FooterNavLinks({ data }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-base text-primary6 pb-3 border-b-2 border-NeutralN40 font-semibold whitespace-nowrap">{data[0].title}</span>
      <ul className="flex flex-col justify-start items-start gap-3">
        {data[0].navLinks.map((item, index) => {
          return (
            <li key={index} className="text-sm text-NeutralN200">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterNavLinks;
