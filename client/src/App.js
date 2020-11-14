import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Button from 'react-bootstrap/esm/Button';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    constructor() {
        super();
        this.state = {
            imageCards: 1
        }

        this.addImageCard = this.addImageCard.bind(this);
    }

    addImageCard() {
        this.setState({
            imageCards: this.state.imageCards + 1
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h1 style={{ marginTop: '1rem', marginBottom: '1rem', color: 'white' }}>Image Processing App</h1>
                <div className="d-flex justify-content-center" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    <Button onClick={this.addImageCard}>Add image slot</Button>
                </div>
                <Scroll height={'80vh'}>
                    <div className="row">
                        {[...Array(this.state.imageCards).keys()].map(key => <div key={key} className="col col-md-6 col-lg-4 d-flex justify-content-center">
                            <ImageCard />
                        </div>)}
                    </div>
                </Scroll>
            </div>
        );
    }
}

export default App;