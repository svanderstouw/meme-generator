import React from 'react'

const MemeInputPanel = ({setTopText, setBottomText}) => (
        <div id="input-container">
            <input id='topInput' type='text' onChange={setTopText} placeholder='Type top text here'></input>
            <input id='bottomInput' type='text' onChange={setBottomText} placeholder='Type bottom text here'></input>
            
        </div>
)
  
export default MemeInputPanel