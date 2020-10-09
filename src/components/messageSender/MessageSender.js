import { Avatar } from "@material-ui/core";
import React from "react";
import "./messageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function messageSender() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messagesender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            placeholder={"What's on your mind"}
            className="messagesender__input"
          />
          <input placeholder={"link of your image (Optional)"} />
          <button type="submit" onClick={handleClick}>
            Hidden button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messagesender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__option">
          <InsertEmoticonIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

export default messageSender;
