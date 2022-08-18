import React from "react";
import "./SinglePost.css";
function SinglePost({ singlePost }) {
  return (
    <div className="single__post">
      <img src={singlePost.poster} />
    </div>
  );
}

export default SinglePost;
