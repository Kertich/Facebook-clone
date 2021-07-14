import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import './Feed.css';
import Post from './Post';
function Feed() {
    return (
        <div className="feed">
        <StoryReel />
        <MessageSender />
         {/*MessageSender */}  

         <Post
             profilePic="https://pbs.twimg.com/profile_images/1149589217573425153/XfMudxUX_400x400.jpg" 
             message = "React is awesome!!!"
             timestamp="This is the timestamp"
             username='@kipsangkertich'
             image = "https://miro.medium.com/fit/c/262/262/2*7kB23qvO6eQ_ZQE4jM3OQg.jpeg" 
         /> 
         <Post 
             profilePic="https://pbs.twimg.com/profile_images/1149589217573425153/XfMudxUX_400x400.jpg" 
             message = "React is awesome!!!"
             timestamp="This is the timestamp"
             username='@kipsangkertich'
             image = "https://miro.medium.com/fit/c/262/262/2*7kB23qvO6eQ_ZQE4jM3OQg.jpeg" 
        
         />
          <Post 
             profilePic="https://pbs.twimg.com/profile_images/1149589217573425153/XfMudxUX_400x400.jpg" 
             message = "React is awesome!!!"
             timestamp="This is the timestamp"
             username='@kipsangkertich'
             image = "https://miro.medium.com/fit/c/262/262/2*7kB23qvO6eQ_ZQE4jM3OQg.jpeg" 
        
         />
        </div>
    )
}

export default Feed
