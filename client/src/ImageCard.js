import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ImageCard extends Component {

    constructor() {
        super();
        this.state = {
            selectedFile: '',
            selectedFilePreview: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
            selectedFilePreview: URL.createObjectURL(event.target.files[0])
        })
    }

    submit() {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:5000/upload";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.warn(res);
            })

    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Title>Selected image</Card.Title>
                <Card.Img variant="top" src={this.state.selectedFilePreview} class="img-thumbnail" alt="" />
                <Card.Body>
                    <Card.Text>
                        Some quick example text.
                    </Card.Text>
                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                    <Button variant="secondary" onClick={() => this.submit()}>Upload</Button>
                    <Button variant="primary">Process</Button>
                </Card.Body>
            </Card>



        )
    }
}

export default ImageCard;