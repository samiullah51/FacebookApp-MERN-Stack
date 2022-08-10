import React, { useState } from "react";
import "./Story.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Story({ content, profileName, profileImage, scroll }) {
  return (
    <div className="story" style={{ transform: `translateX(-${scroll}px)` }}>
      <img src={content} className="story__content" />
      <p className="profile__name">{profileName}</p>
      <img src={profileImage} className="profile__image" />
    </div>
  );
}

export default Story;
