import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ImageCard extends Component {

    constructor() {
        super();
        this.state = {
            imageText: '',
            selectedFile: '',
            selectedFilePreview: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.processImage = this.processImage.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
            selectedFilePreview: URL.createObjectURL(event.target.files[0])
        })
    }

    processImage() {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:5000/process";

        axios.post(url, data, {})
            .then(res => {
                console.warn(res);
            })
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                <Card.Img variant="top" src={this.state.selectedFilePreview} class="img-thumbnail" alt="" />
                <Card.Body>
                    <Card.Title>{this.state.selectedFile.name}</Card.Title>
                    <Card.Text>
                        {this.state.imageText}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.processImage()}>Process</Button>
                </Card.Body>
            </Card>



        )
    }
}

export default ImageCard;