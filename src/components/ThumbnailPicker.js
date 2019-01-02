import React from 'react'

const ThumbnailPicker = ({ action, images }) => (
  <div id="thumbnails-container">
    {images.map((image, index) => <img src={image} alt="" onClick={action} data-key={image} key={index}></img>)}
  </div>
)

export default ThumbnailPicker