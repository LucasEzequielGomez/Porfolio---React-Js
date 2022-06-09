import React from 'react';
import './cover.css';
import coverVideo from "../../media/production ID_4762116.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1>Lucas Gomez</h1>
        <p>Developer │ Architect │ Tecnician</p>  
    </div>
  )
}

export default Cover;