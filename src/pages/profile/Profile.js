import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import { useSelector } from "react-redux";
import Intro from "./into/Intro";
import SinglePost from "./singlepost/SinglePost";

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Navbar />
      <div className="profile__container">
        <Sidebar />
        <div className="profile__body">
          <div className="profile__left">
            <Intro />
          </div>
          <div className="profile__right">
            <h2>All Posts</h2>
            <SinglePost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
