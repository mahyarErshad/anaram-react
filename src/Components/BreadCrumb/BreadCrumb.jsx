import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbs({ data }) {
  let currentLink = "";
  const crumbs = data
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="bread-crumbs">{crumbs}</div>;
}

export default BreadCrumbs;
