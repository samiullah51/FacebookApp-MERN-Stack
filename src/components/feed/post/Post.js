import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
function Post() {
  return (
    <div className="post">
      {/* Post header */}
      <div className="post__header">
        <div className="header__left">
          <img src="https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d" />
          <div className="user__info">
            <p className="username">Bell Gates</p>
            <div className="timing">
              <p>51m - </p>

              <PublicIcon className="globe__icon" />
            </div>
          </div>
        </div>
        <div>
          <MoreHorizIcon />
        </div>
      </div>
      {/* post body */}
      <div className="post__body">
        <img src="https://img.etimg.com/thumb/msid-88517947,width-650,imgsize-32086,,resizemode-4,quality-100/bill-gates.jpg" />
      </div>
      <div className="line"></div>

      {/* Post footer */}
      <div className="post__footer">
        <div className="icon__group">
          <ThumbUpOffAltIcon className="icon" />
          <p>Like</p>
        </div>
        <div className="icon__group">
          <ChatBubbleOutlineIcon className="icon" />
          <p>Comment</p>
        </div>
        <div className="icon__group">
          <ShareIcon className="icon" />
          <p>Share</p>
        </div>
      </div>
      <div className="line" style={{ marginTop: "-2px" }}></div>
      {/* feeback */}
      <div className="feeback">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" />
        <input type="text" placeholder="Write a comment..." />
        <SendIcon className="icon" />
      </div>
    </div>
  );
}

export default Post;
