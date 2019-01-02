import React from 'react'

const PreviewPanel = ({ image, topText, bottomText }) => (
  <div id='preview-container'>
    <img id='preview-image' src={image} alt='Meme' />
    <div id='topText'>{topText}</div>
    <div id='bottomText'>{bottomText}</div>
  </div>
)

export default PreviewPanel