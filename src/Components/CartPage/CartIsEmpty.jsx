import React from "react";
import FirstCartPageTitleRow from "./FirstCartPageTitleRow";

function CartIsEmpty({ data }) {
  return (
    <div className="flex-grow">
      <FirstCartPageTitleRow counter={data.length} />
      <div className="flex-col gap-2 rounded-2xl bg-NeutralN10 pt-16 pb-4 mt-14">

      </div>
    </div>
  );
}

export default CartIsEmpty;
