import React from "react";
import Story from "../story/Story";
import "./storyreel.css";

function StoryReel() {
  return (
    <div className="storyreel">
      <Story
        profileSrc="https://avatars1.githubusercontent.com/u/70173754?s=460&v=4"
        image="https://cdn.pixabay.com/photo/2020/10/01/20/30/rocks-5619660_1280.jpg"
        title="React"
      />
      <Story
        profileSrc="https://avatars1.githubusercontent.com/u/3127317?s=460&u=0ae9c57bd70b06b2e2293323841ebf59cf3dca90&v=4"
        image="https://cdn.pixabay.com/photo/2020/09/26/08/49/squirrel-5603496_1280.jpg"
        title="Rabbit"
      />
      <Story
        profileSrc="https://avatars1.githubusercontent.com/u/70173754?s=460&v=4"
        image="https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055_1280.jpg"
        title="React"
      />
      <Story
        profileSrc="https://avatars1.githubusercontent.com/u/70173754?s=460&v=4"
        image="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"
        title="React"
      />
    </div>
  );
}

export default StoryReel;
