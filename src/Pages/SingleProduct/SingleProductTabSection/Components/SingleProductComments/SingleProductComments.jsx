import React from "react";
import SingleProductForm from "../SingleProductForm/SingleProductForm";
import ClientComment from "../ClientComment/ClientComment";
import SingleProductCommentsData from "../../../../../lib/SingleProductCommentsData/SingleProductCommentsData";

function SingleProductComments() {
  return (
    <>
      <div className="bg-white border border-NeutralN20 rounded-lg p-6 min-w-[21.875rem] max-lg:w-full">
        <SingleProductForm />
      </div>
      <div className="h-full w-full flex-col gap-8 justify-center items-start self-start">
        {SingleProductCommentsData.map((data, index) => {
          return <ClientComment key={index} data={data} />;
        })}
      </div>
    </>
  );
}

export default SingleProductComments;
