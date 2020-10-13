import React from 'react';
import promotionVideo from '../../videos/promotion.mp4';
import './video.css';

 const Video=()=>{
    return (
        <div className="videoControl">
        <video className="video" loop muted autoPlay>
        <source  src={promotionVideo} type="video/mp4"/>
    </video>
    <h3>Make the Season Yours</h3>
    </div>
    )
}

export default Video;