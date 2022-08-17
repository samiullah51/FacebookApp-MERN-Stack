import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { storage } from "../../firebase";
import axios from "axios";

function Navbar() {
  const user = useSelector((state) => state.user);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  // handleLogOut
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/signin");
  };

  // changeProfile
  const changeProfile = (e) => {
    console.log("from profile");
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  // upload
  const updataPhoto = () => {
    setLoading(true);
    const uploadTask = storage
      .ref(`images/${profileImage.name}`)
      .put(profileImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(
          Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(profileImage.name)
          .getDownloadURL()
          .then(async (url) => {
            const updatedPost = await axios.post(
              `http://localhost:8000/api/user/editprofile/${user._id}`,
              {
                profilePic: url,
              }
            );
            setLoading(false);
            setDropdown(false);
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(updatedPost.data));
          });
      }
    );
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
            alt="facebook logo"
          />
        </Link>
        <div className="search_box">
          <SearchIcon style={{ fontSize: "22px", color: "Gray" }} />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>
      <div className="navbar__middle">
        <HomeIcon className="icon active" />
        <OndemandVideoIcon className="icon" />
        <StorefrontIcon className="icon" />
        <SportsEsportsIcon className="icon" />
      </div>
      <div className="navbar__right">
        <MenuIcon className="icon" />
        <MessageIcon className="icon " />
        <NotificationsIcon className="icon " />
        <img
          src={user.profilePic}
          alt="profile img"
          onClick={() => setDropdown(!dropdown)}
        />
        <div className={dropdown ? "dropdown" : "dropdown hide"}>
          <label for="profileInput" className="inputTag">
            <CameraAltIcon className="icon" />
            <input
              id="profileInput"
              type="file"
              onChange={changeProfile}
              style={{ display: "none" }}
            />
          </label>
          {profileImage && (
            <p onClick={updataPhoto} style={{ textAlign: "center" }}>
              {!loading ? "Update" : `${progress}%`}
            </p>
          )}
          <p onClick={handleLogOut}>Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
