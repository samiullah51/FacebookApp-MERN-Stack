import React from "react";
import "./Feed.css";
import Stories from "./stories/Stories";
import Postform from "./postform/Postform";
function Feed() {
  return (
    <div className="feed">
      {/* Story */}
      <Stories />
      {/* post form */}
      <Postform />
      {/* Post */}
    </div>
  );
}

export default Feed;
