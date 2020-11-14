import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Scroll from './Scroll';
import './ImageCard.css';

class ImageCard extends Component {

    constructor() {
        super();
        this.state = {
            imageText: '',
            textIsLoading: false,
            selectedFile: '',
            selectedFilePreview: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.processImage = this.processImage.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            imageText: '',
            selectedFile: event.target.files[0],
            selectedFilePreview: URL.createObjectURL(event.target.files[0])
        })
    }

    processImage() {
        this.setState({
            textIsLoading: true
        })
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:5000/process";

        axios.post(url, data, {})
            .then(res => {
                this.setState({
                    textIsLoading: false,
                    imageText: res['data']
                });
            })
    }

    render() {
        return (
            <Card style={{ height: '25rem', width: '18rem', marginTop: '1rem' }}>
                <input type="file" className="form-control" name="upload_file" style={{ padding: '.175rem .75rem' }} onChange={this.handleInputChange} />
                <img height="200" width="300" src={this.state.selectedFilePreview} className="img-thumbnail" alt="" style={{ maxHeight: '200px' }} />
                <Card.Body style={{ paddingTop: '0.5rem' }}>
                    <Card.Title>Image text:</Card.Title>
                    <Card.Text style={{ overflow: 'scroll', height: '70%' }}>
                        {this.state.textIsLoading ? <Spinner animation="border" /> : this.state.imageText}
                    </Card.Text>
                    <Button variant="primary" style={{ position: 'absolute', bottom: '1rem' }} onClick={() => this.processImage()}>Process</Button>

                </Card.Body>
            </Card>



        )
    }
}

export default ImageCard;