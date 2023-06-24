import React from "react";
import FirstCartPageTitleRow from "./FirstCartPageTitleRow";

function CartIsEmpty({ data }) {
  return (
    <div className="flex-grow">
      <FirstCartPageTitleRow counter={data.length} />
    </div>
  );
}

export default CartIsEmpty;
