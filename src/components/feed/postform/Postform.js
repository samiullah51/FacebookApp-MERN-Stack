import React, { useState } from "react";
import "./Postform.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useSelector } from "react-redux";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { storage } from "../../../firebase";
import axios from "axios";

function Postform() {
  const user = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);
  const [showImg, setShowImg] = useState(null);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
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
  // setImage(URL.createObjectURL(e.target.files[0]))
  //handleChange
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setShowImg(URL.createObjectURL(e.target.files[0]));
    }
  };
  // handleSubmit
  const handleSubmit = () => {
    setLoading(true);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(async (url) => {
            const newPost = await axios.post(
              "http://localhost:8000/api/post/new",
              {
                userId: user._id,
                profilePic: user.profilePic,
                displayName: user.firstName + " " + user.sureName,
                desc: desc,
                poster: url,
                likes: 14,
              }
            );
            setLoading(false);
            setModal(false);
            window.location.reload();
          });
      }
    );
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
              {showImg && <img src={showImg} />}

              <label for="inputTag">
                <CameraAltIcon className="icon" />
                <input
                  id="inputTag"
                  type="file"
                  onChange={handleChange}
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
              <button className="postBtn" onClick={handleSubmit}>
                {loading ? `Uploading... ${progress}%` : "Post"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Postform;
