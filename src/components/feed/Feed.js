import React, { useEffect, useState } from "react";
import StoryReel from "../storyreel/StoryReel";
import "./feed.css";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import db from "../../firebase";


function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id,
        data:doc.data()
      })))
    })
    
  }, [""])
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
        <Post
        profilePic={post.data.profilePic}
        key={post.data.id}
        image = {post.data.image}
        userName ={post.data.username}
        timestamp={post.data.timestamp}
        message = {post.data.message} />
      ))}
    </div>
  );
}

export default Feed;
