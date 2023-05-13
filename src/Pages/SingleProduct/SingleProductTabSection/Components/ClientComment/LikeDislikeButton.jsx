import React from "react";

function LikeDislikeButton({counter, icon, onClick}) {
  return (
    <button className="flex-center py-2 pl-2 pr-4 gap-3 bg-NeutralN10 rounded-5px">
      <span className="text-sm text-NeutralN300 font-semibold">{data.dislikes}</span>
      <DislikeIcon />
    </button>
  );
}

export default LikeDislikeButton;
