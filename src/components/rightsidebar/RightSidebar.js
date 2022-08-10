import React from "react";
import "./RightSidebar.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CakeIcon from "@mui/icons-material/Cake";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function RightSidebar() {
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
        <div className="contact">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/640px-Bill_Gates_2018.jpg" />
          <p>BillGates</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
