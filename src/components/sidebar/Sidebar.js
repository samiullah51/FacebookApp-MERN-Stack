import React from "react";
import Listitem from "./listitem/Listitem";
import "./Sidebar.css";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FlagIcon from "@mui/icons-material/Flag";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import { useSelector } from "react-redux";
function Sidebar() {
  const user = useSelector((state) => state.user);

  return (
    <div className="sidebar">
      <div className="current__user">
        <img src={user.profilePic} alt="profile img" />
        <p>
          {user.firstName} {user.sureName}
        </p>
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
        <Listitem
          iconName={<FlagIcon className="icon ingredient" />}
          title="Pages"
        />
        <Listitem
          iconName={<DateRangeIcon className="icon ingredient" />}
          title="Events"
        />
        <Listitem
          iconName={<ExpandMoreIcon className="icon more" />}
          title="See more"
        />
        <div className="line"></div>
        <div className="shortcuts">
          <p>Your shortcuts</p>
        </div>
        <Listitem
          iconName={<SportsFootballIcon className="icon ingredient" />}
          title="Basket Ball"
        />
        <Listitem
          iconName={<SportsTennisIcon className="icon ingredient" />}
          title="Tennis"
        />
      </div>
    </div>
  );
}

export default Sidebar;
