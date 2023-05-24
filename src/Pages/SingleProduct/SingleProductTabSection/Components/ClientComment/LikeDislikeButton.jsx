import React from "react";

function LikeDislikeButton({ counter, icon, onClick, className }) {
  return (
    <button onClick={onClick} className={`${className} flex-center py-2 pl-2 pr-4 gap-3 rounded-5px like-dislike-buttons min-w-[5.3125rem]`}>
      <span className="text-sm text-NeutralN300 font-semibold">{counter}</span>
      {icon}
    </button>
  );
}

export default LikeDislikeButton;
