import React from "react";
import { Rating } from "react-simple-star-rating";
import { ReactComponent as DislikeIcon } from "../../../../../assets/images/icons/dislike-icon.svg";
import { ReactComponent as LikeIcon } from "../../../../../assets/images/icons/like-icon.svg";
import LikeDislikeButton from "./LikeDislikeButton";
import { useState } from "react";
import adminAvatar from "../../../../../assets/images/data/single-product-comments/5.svg";
import styles from "./style.module.css"

function ClientComment({ data }) {
  const [likeState, setLikeState] = useState("");
  const handleDislike = () => {
    likeState === "disliked" ? setLikeState("") : setLikeState("disliked");
  };
  const handleLike = () => {
    likeState === "liked" ? setLikeState("") : setLikeState("liked");
  };
  return (
    <div className="pb-8 border-b border-NeutralN30 flex-col gap-2 w-full">
      <div className="flex justify-between items-center comments-user-buttons">
        <div className="flex gap-3">
          <img className="w-10 h-10 rounded-full" src={data.avatar} alt="avatar" />
          <div className="flex-col justify-center gap-1">
            <span className="text-NeutralN500 text-xs font-semibold whitespace-nowrap">{data.name}</span>
            <span className="text-[0.5625rem] text-NeutralN70">{data.date}</span>
          </div>
          <Rating initialValue={data.rating} size={14} readonly className="comment-star" />
        </div>
        <div className="flex-center gap-2">
          <LikeDislikeButton className={`${likeState === "disliked" ? "bg-Red1" : "bg-NeutralN10"}`} onClick={handleDislike} icon={<DislikeIcon className={`${likeState === "disliked" ? "stroke-Magenta fill-Magenta" : "stroke-NeutralN300"}`} />} counter={likeState === "disliked" ? data.dislikes + 1 : data.dislikes} />
          <LikeDislikeButton className={`${likeState === "liked" ? "bg-primary1" : "bg-NeutralN10"}`} onClick={handleLike} icon={<LikeIcon className={`${likeState === "liked" ? "stroke-primary6 fill-primary6" : "stroke-NeutralN300"}`} />} counter={likeState === "liked" ? data.likes + 1 : data.likes} />
        </div>
      </div>
      <p className="text-xs text-NeutralN500 font-semibold mr-[3.25rem] user-comment">{data.comment}</p>
      {data.AdminReply && (
        <div className="flex-col gap-2 mt-6 mr-[3.25rem]">     
          <div className="flex gap-3">
            <img className="w-10 h-10 rounded-full" src={adminAvatar} alt="Anaram admin avatar" />
            <div className="flex-col justify-center gap-1">
              <span className="text-NeutralN500 text-xs font-semibold">کارشناس آنارام</span>
              <span className="text-[0.5625rem] text-NeutralN70">{data.AdminReply.date}</span>
            </div>
          </div>
          <p className="text-xs text-NeutralN500 font-semibold mr-[3.25rem]">{data.AdminReply.comment}</p>
        </div>
      )}
    </div>
  );
}

export default ClientComment;
