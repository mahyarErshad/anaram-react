import React from "react";
import SingleProductForm from "../SingleProductForm/SingleProductForm";
import ClientComment from "../ClientComment/ClientComment";

function SingleProductComments() {
  return (
    <>
      <div className="bg-white border border-NeutralN20 rounded-lg p-6 min-w-[21.875rem]">
        <SingleProductForm />
      </div>
      <div className="h-full w-full flex-col gap-8 justify-center items-start self-start">
        <ClientComment />
      </div>
    </>
  );
}

export default SingleProductComments;
