import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./messageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setInput("");
    setImageURL("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="messagesender">
      <div className="messagesender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={handleInput}
            placeholder={"What's on your mind"}
            className="messagesender__input"
          />
          <input
            placeholder={"image URL (optional)"}
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button type="submit" onClick={handleClick}>
            Hidden button
          </button>
        </form>
      </div>
      <div className="messagesender__bottom">
        <div className="messagesender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Videos</h3>
        </div>
        <div className="messagesender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
