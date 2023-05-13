import React from "react";

function LikeDislikeButton({ counter, icon, onClick }) {
  return (
    <button onClick={onClick} className="flex-center py-2 pl-2 pr-4 gap-3 bg-NeutralN10 rounded-5px">
      <span className="text-sm text-NeutralN300 font-semibold">{counter}</span>
      {icon}
    </button>
  );
}

export default LikeDislikeButton;
