import React, { useEffect, useState } from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useSelector } from "react-redux";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import axios from "axios";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

TimeAgo.addDefaultLocale(en);
function Post({ post }) {
  const timeAgo = new TimeAgo("en-US");
  const user = useSelector((state) => state.user);

  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [isLike, setIsLike] = useState(false);
  // useEffect to get comments
  useEffect(() => {
    const fetchComments = async () => {
      const result = await axios.get(
        `http://localhost:8000/api/comments/allcomments/${post._id}`
      );
      setComments(result.data);
    };
    fetchComments();
  }, [user]);

  // handleNewComment
  const handleNewComment = async () => {
    !newComment
      ? alert("Type Comment")
      : await axios.post(`http://localhost:8000/api/comments/new`, {
          postId: post._id,
          comments: {
            byName: user?.firstName + " " + user?.sureName,
            byPic: user?.profilePic,
            byText: newComment,
          },
        });
    setNewComment("");
  };

  return (
    <div className="post">
      {/* Post header */}
      <div className="post__header">
        <div className="header__left">
          <img src={post?.profilePic} />
          <div className="user__info">
            <p className="username">{post?.displayName}</p>
            <div className="timing">
              <p>{timeAgo.format(Date.parse(post.createdAt))} - </p>

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
        <p style={{ margin: "0 10px" }}>{post?.desc}</p>
        <img src={post?.poster} />
      </div>
      <div className="likes__comments">
        <div className="like__container">
          <ThumbUpAltIcon className="like__icon" />

          <p>{!isLike ? likes : likes + 1}</p>
        </div>
        <p onClick={() => setShowComment(!showComment)}>
          {comments.length} comments
        </p>
      </div>
      <div className="line" style={{ margin: "5px auto", width: "95%" }}></div>
      {/* Comments Container */}
      <div className="comment__area">
        {comments.map((comment) => (
          <div
            className={
              showComment ? "comments__container" : "comments__container hide"
            }
          >
            <img src={comment.comments?.byPic} />
            <div className="comment__content">
              <p className="by__name">{comment.comments?.byName}</p>
              <p className="by__text">{comment.comments?.byText}</p>
            </div>
            <p className="comment__time">
              {timeAgo.format(Date.parse(comment.createdAt))}
            </p>
          </div>
        ))}
      </div>
      {/* Post footer */}
      <div className="post__footer">
        <div className="icon__group" onClick={() => setIsLike(!isLike)}>
          {!isLike ? (
            <ThumbUpOffAltIcon className="icon" />
          ) : (
            <ThumbUpIcon className="icon" style={{ color: "dodgerblue" }} />
          )}

          <p style={{ color: isLike && "dodgerblue" }}>Like</p>
        </div>
        <div
          className="icon__group"
          onClick={() => setShowComment(!showComment)}
        >
          <ChatBubbleOutlineIcon className="icon" />
          <p>Comment</p>
        </div>
        <div className="icon__group">
          <ShareIcon className="icon" />
          <p>Share</p>
        </div>
      </div>
      <div
        className={showComment && "line"}
        style={{ margin: "5px auto", width: "95%" }}
      ></div>
      {/* feeback */}
      <div className={showComment ? "feeback" : "feeback hide"}>
        <img src={user.profilePic} />
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <SendIcon className="icon" onClick={handleNewComment} />
      </div>
    </div>
  );
}

export default Post;
