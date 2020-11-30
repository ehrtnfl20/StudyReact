import React from 'react';
import VideoItem from './VideoItem';

const videoList = ({ videos, handleVideoSelect, handleVideoSave }) => {
    console.info("Videolist" , videos);

    const resultVideos = videos.map(video => {
           return (
               <VideoItem
                    key={video.etag}
                    video={video}
                    handleVideoSelect={handleVideoSelect}
                    handleVideoSave={handleVideoSave}/>
           ); 
    });

    return (
        <div className="container">
            <div className ="row">
                <div className="col">
                    {resultVideos}
                </div>
            </div>
        </div>
    );
}                                         
  
export default videoList;