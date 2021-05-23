
import React,{ useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './axios.js';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("backendurl/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app_videoContainer">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}

            />
          )
        )}

      </div>

    </div>
  );
}

export default App;
