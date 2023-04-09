import React from "react";
import BlogCards from "./BlogCards";

function MainPageBlog() {
  return (
    <section className="container flex-center mt-[5.625rem] gap-6">
      <h2 className="font-bold text-xl text-NeutralN500">
        مجله <strong className="text-primary6">آنارام</strong>
      </h2>
      <div className="flex-center gap-6 w-full flex-wrap">
        <BlogCards />
      </div>
    </section>
  );
}

export default MainPageBlog;
