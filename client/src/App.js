import React, { Component } from 'react';
import ImageCard from './components/ImageCard';
import Button from 'react-bootstrap/esm/Button';
import Scroll from './components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super();

        // Number of images
        this.state = {
            imageCards: 1
        }

        this.addImageCard = this.addImageCard.bind(this);
    }

    // Adds one slot for an image
    addImageCard() {
        this.setState({
            imageCards: this.state.imageCards + 1
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Image Processing App</h1>
                <div className="addCardButton">
                    <Button onClick={this.addImageCard}>Add image slot</Button>
                </div>
                <Scroll height={'80vh'}>
                    <div className="row">
                        {[...Array(this.state.imageCards).keys()].map(key => <div key={key} className="imageCard col col-md-6 col-lg-4">
                            <ImageCard />
                        </div>)}
                    </div>
                </Scroll>
            </div>
        );
    }
}

export default App;