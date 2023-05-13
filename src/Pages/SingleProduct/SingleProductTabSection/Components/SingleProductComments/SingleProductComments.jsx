import React from "react";
import SingleProductForm from "../SingleProductForm/SingleProductForm";
import ClientComment from "../ClientComment/ClientComment";

function SingleProductComments() {
  return (
    <>
      <div className="bg-white border border-NeutralN20 rounded-lg p-6 min-w-[21.875rem]">
        <SingleProductForm />
      </div>
      <ClientComment />
    </>
  );
}

export default SingleProductComments;
