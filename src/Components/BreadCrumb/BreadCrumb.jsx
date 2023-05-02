import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbs() {
  const data = [
    {
      title: "صفحه اصلی",
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
      <div className="crumb" key={crumb.title}>
        <Link to={crumb.to}>{crumb.title}</Link>
      </div>
    );
  });

  return <div className="bread-crumbs">{crumbs}</div>;
}

export default BreadCrumbs;
