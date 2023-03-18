import React from "react";

function NavLinks(props) {
  return (
    <li className="flex-center gap-2 text-sm text-NeutralN300 cursor-pointer px-6 py-3 border-l border-NeutralN30">
      {props.text}<Icon />
    </li>
  );
}

export default NavLinks;
