import React, { Component } from 'react'
import domtoimage from 'dom-to-image-more'
import '../index.css'
import MemeGenerator from '../components/MemeGenerator'

class App extends Component {
    constructor(props) {
        super(props)
        const images = ['./images/dog1.jpg', './images/dog2.jpg', './images/dog3.jpg', './images/dog4.jpg', './images/dog5.jpg', './images/dog6.jpg', './images/dog7.jpg', './images/dog8.jpg']
        const topText = ''
        const bottomText = ''

        this.state = { image: images[0], images, topText, bottomText }
    }

    selectImage = event => {
        this.setState({ image: event.target.getAttribute('data-key') })
    }

    setTopText = event => {
        this.setState({ topText: event.target.value })
    }

    setBottomText = event => {
        this.setState({ bottomText: event.target.value })
    }

    saveImage = () => {
        domtoimage.toJpeg(document.getElementById('preview-container'), { quality: 0.95})
        .then(function (dataUrl) {
            var link = document.createElement('a')
            link.download = 'meme.jpg'
            link.href = dataUrl
            link.click()
        })
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Meme Generator</h1>
                </header>

                <MemeGenerator
                    image={this.state.image}
                    images={this.state.images}
                    topText={this.state.topText}
                    bottomText={this.state.bottomText}
                    selectImage={this.selectImage}
                    setTopText={this.setTopText}
                    setBottomText={this.setBottomText}
                    saveImage={this.saveImage}
                />
            </div>
        )
    }
}

export default App