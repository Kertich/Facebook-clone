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
             profilePic="https://pbs.twimg.com/profile_images/1149589217573425153/XfMudxUX_400x400.jpg" alt="Obed Kertich (@Kipsang_Kertich) | Twitter" jsname="HiaYvf" jsaction="load:XAeZkd;" class="n3VNCb" data-noaft="1" style="width: 383px; height: 383px; margin: 0px;"
             message = "React is awesome!!!"
             timestamp="This is the timestamp"
             username='@kipsangkertich'
             image = "https://miro.medium.com/fit/c/262/262/2*7kB23qvO6eQ_ZQE4jM3OQg.jpeg" alt="kipsang kertich – Medium" jsname="HiaYvf" jsaction="load:XAeZkd;" class="n3VNCb" data-noaft="1" style="width: 262px; height: 262px; margin: 0px;"
         /> 
         <Post 
             profilePic="https://pbs.twimg.com/profile_images/1149589217573425153/XfMudxUX_400x400.jpg" alt="Obed Kertich (@Kipsang_Kertich) | Twitter" jsname="HiaYvf" jsaction="load:XAeZkd;" class="n3VNCb" data-noaft="1" style="width: 383px; height: 383px; margin: 0px;"
             message = "React is awesome!!!"
             timestamp="This is the timestamp"
             username='@kipsangkertich'
             image = "https://miro.medium.com/fit/c/262/262/2*7kB23qvO6eQ_ZQE4jM3OQg.jpeg" alt="kipsang kertich – Medium" jsname="HiaYvf" jsaction="load:XAeZkd;" class="n3VNCb" data-noaft="1" style="width: 262px; height: 262px; margin: 0px;"
        
         />
         <Post />
        </div>
    )
}

export default Feed
