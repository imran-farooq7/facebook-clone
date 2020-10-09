import React from "react";
import StoryReel from "../storyreel/StoryReel";
import "./feed.css";
import MessageSender from "../messageSender/MessageSender";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
}

export default Feed;
