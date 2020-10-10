import React from "react";
import StoryReel from "../storyreel/StoryReel";
import "./feed.css";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/116103483_10219532658121974_2029671476170403080_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeEFN5BZeVfKReSkyBQRJSEDna13W-q0djSdrXdb6rR2NLx3cjFzENaE1M4VBPYY_n4&_nc_ohc=ZBaNN2uTmdAAX8TISnd&_nc_ht=scontent.flhe5-1.fna&oh=eed067c0f54e97a7e7820029e0a9228e&oe=5FA760DF"
        message="message"
        timeStamp="timestamp"
        userName="username"
        image="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/116103483_10219532658121974_2029671476170403080_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeEFN5BZeVfKReSkyBQRJSEDna13W-q0djSdrXdb6rR2NLx3cjFzENaE1M4VBPYY_n4&_nc_ohc=ZBaNN2uTmdAAX8TISnd&_nc_ht=scontent.flhe5-1.fna&oh=eed067c0f54e97a7e7820029e0a9228e&oe=5FA760DF"
      />
      <Post
        profilePic="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/67217552_10216206234843471_7937372117337636864_o.jpg?_nc_cat=104&_nc_sid=174925&_nc_eui2=AeH3wFqxlt78m6-NTn0pheXP0geZmAhtK6LSB5mYCG0rolsCmwc8xJBMD85TdJNDkrA&_nc_ohc=rQidGIoCcOMAX-u558v&_nc_ht=scontent.flhe5-1.fna&oh=f16d0cba9370e8b4e86da7d9908119aa&oe=5FA4F6F6"
        message="message"
        timeStamp="timestamp"
        userName="username"
        image="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/116103483_10219532658121974_2029671476170403080_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeEFN5BZeVfKReSkyBQRJSEDna13W-q0djSdrXdb6rR2NLx3cjFzENaE1M4VBPYY_n4&_nc_ohc=ZBaNN2uTmdAAX8TISnd&_nc_ht=scontent.flhe5-1.fna&oh=eed067c0f54e97a7e7820029e0a9228e&oe=5FA760DF"
      />
      <Post
        profilePic="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/67217552_10216206234843471_7937372117337636864_o.jpg?_nc_cat=104&_nc_sid=174925&_nc_eui2=AeH3wFqxlt78m6-NTn0pheXP0geZmAhtK6LSB5mYCG0rolsCmwc8xJBMD85TdJNDkrA&_nc_ohc=rQidGIoCcOMAX-u558v&_nc_ht=scontent.flhe5-1.fna&oh=f16d0cba9370e8b4e86da7d9908119aa&oe=5FA4F6F6"
        message="message"
        timeStamp="timestamp"
        userName="username"
        image="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/116103483_10219532658121974_2029671476170403080_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeEFN5BZeVfKReSkyBQRJSEDna13W-q0djSdrXdb6rR2NLx3cjFzENaE1M4VBPYY_n4&_nc_ohc=ZBaNN2uTmdAAX8TISnd&_nc_ht=scontent.flhe5-1.fna&oh=eed067c0f54e97a7e7820029e0a9228e&oe=5FA760DF"
      />
    </div>
  );
}

export default Feed;
