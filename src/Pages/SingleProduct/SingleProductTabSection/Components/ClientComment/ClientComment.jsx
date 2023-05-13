import React from "react";
import { Rating } from "react-simple-star-rating";
import { ReactComponent as DislikeIcon } from "../../../../../assets/images/icons/dislike-icon.svg";
import { ReactComponent as LikeIcon } from "../../../../../assets/images/icons/like-icon.svg";
import LikeDislikeButton from "./LikeDislikeButton";
import { useState } from "react";

function ClientComment({ data }) {
  const [likeState, setLikeState] = useState("");
  const handleDislike = () => {
    likeState === "disliked" ? setLikeState("") : setLikeState("disliked");
  };
  const handleLike = () => {
    likeState === "liked" ? setLikeState("") : setLikeState("liked");
  };
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
          <LikeDislikeButton className={`${likeState === "disliked" ? "stroke-Magenta fill-Magenta" : "bg-NeutralN10"}`} onClick={handleDislike} icon={<DislikeIcon className={`${likeState === "disliked" ? "stroke-Magenta fill-Magenta" : "stroke-NeutralN300"}`} />} counter={likeState === "disliked" ? data.dislikes + 1 : data.dislikes} />
          <LikeDislikeButton className={`${likeState === "liked" ? "bg-primary1" : "bg-NeutralN10"}`} onClick={handleLike} icon={<LikeIcon className={`${likeState === "liked" ? "stroke-primary6 fill-primary6" : "stroke-NeutralN300"}`} />} counter={likeState === "liked" ? data.likes + 1 : data.likes} />
        </div>
      </div>
      <p className="text-xs text-NeutralN500 font-semibold mr-[3.25rem]">{data.comment}</p>
    </div>
  );
}

export default ClientComment;
