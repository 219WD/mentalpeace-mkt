import React from 'react';
import './VideoComponent.css'

const VideoComponent = () => {
  return (
    <iframe
      className='video'
      width="400"
      height="200"
      src="https://www.youtube.com/embed/9VndxgFGy9E?autoplay=1"
      title="4 Pilares para incrementar las Ventas en tu Centro de Estética."
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default VideoComponent;
