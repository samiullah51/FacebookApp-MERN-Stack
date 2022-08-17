import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Navbar />
      <div className="profile__container">
        <Sidebar />
        <div className="profile__section">
          {/* Profile Header */}
          <div className="profile__header">
            <img src={user.profilePic} />
            <p className="profile__name">
              {user.firstName} {user.sureName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
