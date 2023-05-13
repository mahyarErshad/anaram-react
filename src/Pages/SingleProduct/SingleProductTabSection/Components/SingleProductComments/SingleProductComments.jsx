import React from "react";
import { Rating } from "react-simple-star-rating";
import PrimaryButton from "../../../../../Components/Utils/Buttons/PrimaryButton/PrimaryButton";
import { useState } from "react";
import SingleProductForm from "../SingleProductForm/SingleProductForm";

function SingleProductComments() {
  const [rating, setRating] = useState(0);
  return (
    <div className="bg-white border border-NeutralN20 rounded-lg p-6 min-w-[21.875rem]">
      <SingleProductForm />
    </div>
  );
}

export default SingleProductComments;
