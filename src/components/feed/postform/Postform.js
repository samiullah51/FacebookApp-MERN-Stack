import React from "react";
import "./Postform.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useSelector } from "react-redux";
function Postform() {
  const user = useSelector((state) => state.user);

  return (
    <div className="postfrom">
      <div className="postform__up">
        <img src={user.profilePic} />
        <input
          type="text"
          placeholder={`What's on your mind, ${user.firstName}`}
        />
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
