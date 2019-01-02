import React from 'react'

const MemeInputPanel = ({setTopText, setBottomText, saveImage}) => (
        <div id="input-container">
            <input id='topInput' type='text' onChange={setTopText} placeholder='Type top text here'></input>
            <input id='bottomInput' type='text' onChange={setBottomText} placeholder='Type bottom text here'></input>
            <button onClick={saveImage}>Save Your Meme</button>
        </div>
)
  
export default MemeInputPanel