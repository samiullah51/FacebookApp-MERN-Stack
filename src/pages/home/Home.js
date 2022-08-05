import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default Home;
