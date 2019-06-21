import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class CreateShoe extends Component {
    constructor(props){
    super(props);

    this.state = {
        style: '',
        brand: '',
        color: '',
        image: '',
        size: '',
        redirect: false
    }
}
    // method to handle input
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    // method to handle submit
    handleSubmit = (e) => {
        e.preventDefault();
        // create variable to be the new shoes
        let newShoe = {
            style: this.state.style,
            brand: this.state.brand,
            color: this.state.color,
            image: this.state.image,
            size: this.state.size
        };
        console.log(newShoe);

        // add newShoe to database using axios
        axios.post('http://localhost:3000/shoes/add', newShoe)
            .then(res => console.log(res.data))
            this.setState({ redirect: true })
        // clear Form
        this.clearForm();


    }

    // method to clear out form after submit
    clearForm = () => {
        this.setState({
            style: '',
            brand: '',
            color: '',
            image: '',
            size: '',
        })
    }


    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/list' />
        }
        return(
            <div>
                <h3>Add Shoes to your Collection</h3>
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
                                value="Add To Collection"
                                className="form-submit"
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateShoe;
