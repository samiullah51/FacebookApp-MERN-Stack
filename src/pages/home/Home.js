import React from "react";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />
      <div className="home__container">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />

        <div>
          <h2>Right</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
