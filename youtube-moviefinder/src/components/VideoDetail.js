import React from 'react';
import '../styles/VideoDetail.css';

const VideoDetail = ({  video  })  => {
    if(!video) {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col'>
                        Loading...
                    </div>
                </div>
            </div>
        );
    }

    const youtubeSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    return (
        <div className="container" >
            <div className="row" >
                <div className='col videoContainer'>
                    <iframe 
                        title="Youtube video player"
                        allowFullScreen="allowFullScreen"
                        src={youtubeSrc}
                        style={{width: '100%', height: '100%', border: '0'}}
                        className  ='video'
                        allow='autoplay'>
                    </iframe>
                </div>
            </div>
            <div className="row">
                <div className='col'>
                    <h5>dagerouslySetInnetHTTL={{__html: video.snippet.title}}</h5>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}



export default VideoDetail;