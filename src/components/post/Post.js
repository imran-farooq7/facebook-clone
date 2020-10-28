import { Avatar } from "@material-ui/core";
import React from "react";
import "./post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";
import firebase from 'firebase'

function Post({ profilePic, image, userName, timestamp, message }) {
  

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{userName}</h3>
  <p>{new Date(firebase.firestore.Timestamp.now().seconds*1000).toLocaleString('en-us',{timeZone: "Asia/Karachi"})}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="profile" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
          {/* <p>Like</p> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
// {new Date(timeStamp?.toDate()).toUTCString()}
