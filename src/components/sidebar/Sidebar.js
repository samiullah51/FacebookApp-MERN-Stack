import React from "react";
import Listitem from "./listitem/Listitem";
import "./Sidebar.css";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="current__user">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          alt="profile img"
        />
        <p>Samiullah</p>
      </div>
      <div className="list">
        <Listitem iconName={<PeopleIcon className="icon" />} title="Friends" />
        <Listitem iconName={<GroupsIcon className="icon" />} title="Groups" />
        <Listitem
          iconName={<StoreIcon className="icon" />}
          title="Marketplace"
        />
        <Listitem
          iconName={<OndemandVideoIcon className="icon" />}
          title="Watch"
        />
        <Listitem
          iconName={<AvTimerIcon className="icon" />}
          title="Memories"
        />
        <Listitem
          iconName={<BookmarkIcon className="icon ingredient" />}
          title="Saved"
        />
      </div>
    </div>
  );
}

export default Sidebar;
