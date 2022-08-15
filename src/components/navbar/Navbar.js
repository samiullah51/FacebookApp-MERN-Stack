import React from "react";
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

function Navbar() {
  const user = useSelector((state) => state.user);
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
        <img src={user.profilePic} alt="profile img" />
      </div>
    </div>
  );
}

export default Navbar;
