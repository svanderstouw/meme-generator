import React from 'react'
import ThumbnailPicker from './ThumbnailPicker'
import PreviewPanel from './PreviewPanel'
import InputPanel from './InputPanel'

const MemeGenerator = (props) => (
    <div id="main-container">
        <div id="thumbnails">
            <ThumbnailPicker
                action={props.selectImage}
                images={props.images}
            />
        </div>
        <div id="preview">
            <PreviewPanel
                image={props.image}
                topText={props.topText}
                bottomText={props.bottomText}
            />
        </div>
        <div id="input">
            <InputPanel
                setTopText={props.setTopText}
                setBottomText={props.setBottomText}
                saveImage={props.saveImage}
            />
        </div>
    </div>
)

export default MemeGenerator