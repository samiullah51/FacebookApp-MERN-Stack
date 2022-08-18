import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import { useSelector } from "react-redux";
import Intro from "./into/Intro";
import SinglePost from "./singlepost/SinglePost";
import axios from "axios";

function Profile() {
  const user = useSelector((state) => state.user);
  const [allPosts, setAllPosts] = useState([]);

  //  Get all posts of the single user
  useEffect(() => {
    const fetchAllPosts = async () => {
      const result = await axios.get(
        `http://localhost:8000/api/post/allposts/${user._id}`
      );
      setAllPosts(result.data);
    };
    fetchAllPosts();
  }, [allPosts]);
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
            <h2>All Posts ({allPosts.length})</h2>
            <div className="posters">
              {allPosts.map((singlePost) => (
                <SinglePost singlePost={singlePost} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
