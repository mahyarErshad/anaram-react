import React from "react";
import { Rating } from "react-simple-star-rating";
import { ReactComponent as DislikeIcon } from "../../../../../assets/images/icons/dislike-icon.svg";
import { ReactComponent as LikeIcon } from "../../../../../assets/images/icons/like-icon.svg";
import LikeDislikeButton from "./LikeDislikeButton";
import { useState } from "react";

function ClientComment({ data }) {
    const [likeState, setLikeState] = useState("")
  return (
    <div className="pb-8 border-b border-NeutralN30 flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img className="w-10 h-10 rounded-full" src={data.avatar} alt="avatar" />
          <div className="flex-col justify-center gap-1">
            <span className="text-NeutralN500 text-xs font-semibold">{data.name}</span>
            <span className="text-[0.5625rem] text-NeutralN70">{data.date}</span>
          </div>
          <Rating initialValue={data.rating} size={14} readonly />
        </div>
        <div className="flex-center gap-2">
          <LikeDislikeButton icon={<DislikeIcon />} counter={data.dislikes} />
          <LikeDislikeButton icon={<LikeIcon />} counter={data.likes} />
        </div>
      </div>
      <p className="text-xs text-NeutralN500 font-semibold mr-[3.25rem]">{data.comment}</p>
    </div>
  );
}

export default ClientComment;
