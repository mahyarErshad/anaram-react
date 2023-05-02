import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbs() {
  const data = [
    {
      title: "آنارام",
      to: "/",
    },
    {
      title: "باتری قلمی",
      to: "/products",
    },
    {
      title: "باتری نیم قلمی آلکالاین وارتا",
      to: "/products/product/id-1234",
    },
  ];
  const crumbs = data.map((crumb) => {
    return (
      <div className="text-xs text-NeutralN100 last-of-type:text-primary6 font-semibold hover:text-primary8 duration-300" key={crumb.title}>
        <Link to={crumb.to}>{crumb.title} /</Link>
      </div>
    );
  });
  console.log(data.length);

  return <div className="flex justify-start items-center gap-2">{crumbs}</div>;
}

export default BreadCrumbs;
