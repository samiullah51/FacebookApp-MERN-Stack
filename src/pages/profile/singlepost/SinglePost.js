import React from "react";
import "./SinglePost.css";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

function SinglePost({ singlePost }) {
  // Delete a specific post
  const handleClick = async (id) => {
    let confirm = window.confirm("Do you want to delete this post?");
    try {
      if (confirm) {
        const deletedPost = await axios.delete(
          `http://localhost:8000/api/post/delete/${id}`
        );
        window.location.reload();
      } else {
        return false;
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="single__post">
      <img src={singlePost.poster} />
      <div className="icon" onClick={() => handleClick(singlePost._id)}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default SinglePost;
