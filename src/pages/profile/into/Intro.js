import React from "react";
import { useSelector } from "react-redux";
import "./Intro.css";
function Intro() {
  const user = useSelector((state) => state.user);

  return (
    <div className="intro">
      <div className="intro__header">
        <img src={user.profilePic} />
        <p className="profile__name">
          {user.firstName} {user.sureName}
        </p>
      </div>
      <div className="line"></div>
      <div className="intro__body">
        <p>
          <b>First Name:</b> {user.firstName}
        </p>
        <p>
          <b>Sure Name:</b> {user.sureName}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Gender:</b> {user.gender}
        </p>
        <p>
          <b>DOB:</b> {user.dob}
        </p>
      </div>
    </div>
  );
}

export default Intro;
