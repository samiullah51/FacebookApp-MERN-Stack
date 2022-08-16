import React, { useState } from "react";
import "./Postform.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useSelector } from "react-redux";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
function Postform() {
  const user = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  // handleNewPost
  const handleNewPost = () => {
    setModal(true);
  };

  // handleCancel
  const handleCancel = () => {
    setImage("");
    setDesc("");
    setModal(false);
  };
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
        <div className="icon__group" onClick={handleNewPost}>
          <CollectionsIcon className="icon" style={{ color: "green" }} />
          <p>Photo/video</p>
        </div>
        <div className="icon__group">
          <InsertEmoticonIcon className="icon" style={{ color: "orange" }} />
          <p>Feeling/activity</p>
        </div>
      </div>
      {/* modal */}
      {modal && (
        <div className="modal">
          <div className="modal__box">
            {/* Modal header */}
            <div className="modal__header">
              <h3>Create New Post</h3>
              <p onClick={() => setModal(false)}>&times;</p>
            </div>
            <div className="line"></div>
            {/* body */}
            <div className="modal__body">
              <textarea
                rows={4}
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Write something about your post..."
              />
              {image && <img src={image} />}

              <label for="inputTag">
                <CameraAltIcon className="icon" />
                <input
                  id="inputTag"
                  type="file"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                  style={{ display: "none" }}
                />
              </label>
            </div>
            {/* Footer */}
            <div className="line"></div>
            <div className="modal__footer">
              <button className="cancelBtn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="postBtn">Post</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Postform;
