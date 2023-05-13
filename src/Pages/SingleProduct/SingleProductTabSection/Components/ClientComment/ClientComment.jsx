import React from "react";
import { Rating } from "react-simple-star-rating";

function ClientComment({ data }) {
  return (
    <div className="pb-8 border-b border-NeutralN30 flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img className="w-10 h-10 rounded-full" src={data.avatar} alt="avatar" />
          <div className="flex-col justify-center gap-1">
            <span className="text-NeutralN500 text-xs font-semibold">{data.name}</span>
            <span className="text-[0.5625rem] text-NeutralN70">{data.date}</span>
          </div>
          <Rating initialValue={data.rating} size={14} onClick={function noRefCheck() {}} readonly />
        </div>
      </div>
    </div>
  );
}

export default ClientComment;
