import React from "react";

function FooterAddress(props) {
  return (
    <div className="flex-center gap-2 not-italic">
      {props.icon}
      <p className="text-sm text-NeutralN90">{props.info}</p>
    </div>
  );
}

export default FooterAddress;
