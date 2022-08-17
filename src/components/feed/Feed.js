import React, { useState, useEffect } from "react";
import "./Feed.css";
import Stories from "./stories/Stories";
import Postform from "./postform/Postform";
import Post from "./post/Post";

import axios from "axios";
import { useSelector } from "react-redux";
function Feed() {
  const user = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const result = await axios.get("http://localhost:8000/api/post/allposts");
      setPosts(result.data);
      setLoading(false);
    };
    fetchPosts();
  }, [user]);

  return (
    <div className="feed">
      {/* Story */}
      <Stories />
      {/* post form */}
      <Postform />
      {/* Post */}
      {loading ? (
        <div className="loading"></div>
      ) : (
        posts.map((post) => <Post post={post} />)
      )}
    </div>
  );
}

export default Feed;
