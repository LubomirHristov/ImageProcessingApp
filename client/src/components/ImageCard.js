import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
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

    // Sets image preview
    handleInputChange(event) {
        this.setState({
            imageText: '',
            selectedFile: event.target.files[0],
            selectedFilePreview: URL.createObjectURL(event.target.files[0])
        })
    }

    // Processes the image and updates the image text
    processImage() {
        this.setState({
            textIsLoading: true
        })
        const data = new FormData()
        data.append('file', this.state.selectedFile)
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
            <Card>
                <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                <img height="200" width="300" src={this.state.selectedFilePreview} className="img-thumbnail img-preview" alt="" />
                <Card.Body>
                    <Card.Title>Image text:</Card.Title>
                    <Card.Text>
                        {this.state.textIsLoading ? <Spinner animation="border" /> : this.state.imageText}
                    </Card.Text>
                    <Button className="process-button" variant="primary" onClick={() => this.processImage()}>Process</Button>
                </Card.Body>
            </Card>



        )
    }
}

export default ImageCard;