import React from "react";

function SingleProductForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex-col items-start">
      <label htmlFor="text-area" className="text-NeutralN500 font-semibold text-xs">
        نظر خود را برای ما بنویسید
      </label>
      <textarea id="text-area" className="mt-2 p-3 border border-NeutralN30 rounded-lg w-full resize-none text-xs focus:border-primary2 duration-300 outline-none h-[9.0625rem] mb-8" placeholder="متن نظر ..."></textarea>
      <span className="text-NeutralN500 font-semibold text-xs">امتیاز شما به این محصول</span>
      <div className="mt-2 mb-8 w-full border border-NeutralN30 rounded-lg py-[0.875rem] flex-center">
        <Rating onClick={(rating) => setRating(rating)} allowTitleTag={false} initialValue={0} ratingValue={rating} size={40} transition fillColorArray={["#e85d04", "#f48c06", "#faa307", "#ffba08", "#ffd60a"]} />
      </div>
      <PrimaryButton text="ثبت دیدگاه" className="w-full" />
    </form>
  );
}

export default SingleProductForm;
