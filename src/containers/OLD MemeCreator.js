import React, { Component } from 'react'

import './MemeCreator.css'
import image1 from './resources/Dog1.jpg'
import image2 from './resources/Dog2.jpg'
import image3 from './resources/Dog3.jpg'
import image4 from './resources/Dog4.jpg'



import ThumbnailPickerN from '../components/ThumbnailPickerN'
import MemeInputPanel from '../components/InputPanel'
import MemePreviewer from '../components/Previewer'
// import ThumbnailPicker from './ThumbnailPicker'
// import Preview from './Preview'
// import MemeInputPanel from './MemeInputPanel'

class MemeCreator extends Component {
  constructor() {
    super()
    this.state = {
      images: [image1, image2, image3, image4],
      currentImage: '0',
      topText: 'top text',
      bottomText: 'bottom text'
    }
  }

  updateCurrentImage = event => {


  }


  render() {
    return (
      <div>
        <h1>Meme Generator 2</h1>
        <ThumbnailPickerN images={this.state.images}/>
        <MemePreviewer 
          image={this.state.images[this.state.currentImage]}
        />

      </div>
      // <div id="container">
      //   <div id="thumbnailPanel">
      //     <ThumbnailPicker imagePicked={this.imagePicked}/>
      //   </div>
      //   <div id="previewPanel">
      //     <Preview />
      //   </div>
      //   <div id="inputPanel">
      //     <MemeInputPanel />
      //   </div>
      // </div>
    );
  }
}

export default MemeCreator
