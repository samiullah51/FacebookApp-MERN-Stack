import React from "react";
import "./SinglePost.css";
import DeleteIcon from "@mui/icons-material/Delete";
function SinglePost({ singlePost }) {
  return (
    <div className="single__post">
      <img src={singlePost.poster} />
      <div className="icon">
        <DeleteIcon />
      </div>
    </div>
  );
}

export default SinglePost;
