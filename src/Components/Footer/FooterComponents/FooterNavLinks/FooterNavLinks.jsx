import React from "react";
import { Link } from "react-router-dom";
import goToTop from "../../../../lib/function/goToTop";

const FooterNavLinks = ({ data }) => (
  <div className="flex-col gap-4">
    <span className="text-base text-primary6 pb-3 border-b-2 border-NeutralN40 font-semibold whitespace-nowrap">{data[0].title}</span>
    <div className="flex-col gap-3">
      {data[0].navLinks.map((item, index) => (
        <Link onClick={() => goToTop()} to={item.href || "/"} key={index} className="text-sm text-NeutralN200">
          {item.text}
        </Link>
      ))}
    </div>
  </div>
);

export default FooterNavLinks;
