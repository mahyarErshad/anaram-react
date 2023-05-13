import React from "react";

function ClientComment({ data }) {
  return (
    <div className="pt-8 border-b border-NeutralN30 flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img className="w-10 h-10 rounded-full" src={data.avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default ClientComment;
