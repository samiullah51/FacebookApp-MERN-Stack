import React from "react";
import "./Postform.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
function Postform() {
  return (
    <div className="postfrom">
      <div className="postform__up">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfV4SyNWWjln92bDavxpH_DpfAHG8LPOA_Q&usqp=CAU" />
        <input type="text" placeholder="What's on your mind?" />
      </div>
      <div className="line"></div>
      <div className="postform__down">
        <div className="icon__group">
          <VideocamIcon className="icon" style={{ color: "red" }} />
          <p>Live video</p>
        </div>
        <div className="icon__group">
          <CollectionsIcon className="icon" style={{ color: "green" }} />
          <p>Photo/video</p>
        </div>
        <div className="icon__group">
          <InsertEmoticonIcon className="icon" style={{ color: "orange" }} />
          <p>Feeling/activity</p>
        </div>
      </div>
    </div>
  );
}

export default Postform;
