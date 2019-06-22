import React, { Component } from 'react';
import axios from 'axios';

class EditShoe extends Component {
    constructor(props){
    super(props);

    this.state = {
        style: '',
        brand: '',
        color: '',
        image: '',
        size: ''
    }
}

    componentDidMount = () => {
        axios.get('http://localhost:3000/shoes/'
    + this.props.location.state.id)
            .then(response => {
                this.setState({
                    style: response.data.style,
                    brand: response.data.brand,
                    color: response.data.color,
                    image: response.data.image,
                    size: response.data.size
                })
            })
            .catch(function (error){
                console.log(error);
            })
    }

    // method to handle input
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    // method to handle submit
    handleSubmit = (e) => {
        e.preventDefault();
        // create variable to be the new shoes
        let updatedShoe = {
            style: this.state.style,
            brand: this.state.brand,
            color: this.state.color,
            image: this.state.image,
            size: this.state.size
        };
        console.log(updatedShoe);

        // add updatedShoe to database using axios
        axios.post('https://shoes2match-be.herokuapp.com/update/' + this.props.location.state.id , updatedShoe)
            .then(res => console.log(res.data))
        this.props.history.push("/list")
    }

    // method to clear out form after submit
    clearForm = () => {
        this.setState({
            style: '',
            brand: '',
            color: '',
            image: '',
            size: ''
        })
    }

    render() {
        console.log(this.props.location.state);
        console.log(this.props.location.state.id);

        return(
            <div>
                <h3>Update Shoe Info</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-type">
                        <label> Style: </label>
                        <input type="text"
                                className="form-item"
                                value={this.state.style}
                                onChange={this.handleChange}
                                id="style"
                        />
                    </div>
                    <div className="form-type">
                        <label> Brand: </label>
                        <input type="text"
                                className="form-item"
                                value={this.state.brand}
                                onChange={this.handleChange}
                                id="brand"
                        />
                    </div>
                    <div className="form-type">
                        <label> Color: </label>
                        <input type="text"
                                className="form-item"
                                value={this.state.color}
                                onChange={this.handleChange}
                                id="color"
                        />
                    </div>
                    <div className="form-type">
                        <label> Size: </label>
                        <input type="text"
                                className="form-item"
                                value={this.state.size}
                                onChange={this.handleChange}
                                id="size"
                        />
                    </div>
                    <div className="form-type">
                        <label> Image: </label>
                        <input type="text"
                                className="form-item"
                                value={this.state.image}
                                onChange={this.handleChange}
                                id="image"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                                value="Update"
                                className="form-submit"
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditShoe;
