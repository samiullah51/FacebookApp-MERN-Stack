import React, { useEffect, useState } from "react";
import "./RightSidebar.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CakeIcon from "@mui/icons-material/Cake";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import axios from "axios";
function RightSidebar() {
  const [allUsers, setAllUsers] = useState([]);

  // Get all users
  useEffect(() => {
    const fetchAllUsers = async () => {
      const result = await axios.get("http://localhost:8000/api/user/allusers");
      setAllUsers(result.data);
      console.log(result.data);
    };
    fetchAllUsers();
  }, []);
  console.log(allUsers);
  return (
    <div className="right__sidebar">
      <div className="birth__days">
        <p className="title">Birthdays</p>
        <div className="gift">
          <CakeIcon className="icon" />
          <p>
            <b>Haroon </b> and <b> 3 others </b> have birthday.
          </p>
        </div>
      </div>
      {/* line */}
      <div className="line"></div>

      {/* Contacts */}
      <div className="contacts">
        <div className="contacts__header">
          <div className="header__left">
            <p>Contacts</p>
          </div>
          <div className="header__right">
            <VideoCallIcon className="icon" />
            <SearchIcon className="icon" />
            <MoreHorizIcon className="icon" />
          </div>
        </div>
        {/* Single contact */}
        {/* get all contacts */}
        {allUsers?.map((user) => (
          <div className="contact">
            <img src={user.profilePic} />
            <p>
              {user.firstName} {user.sureName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
