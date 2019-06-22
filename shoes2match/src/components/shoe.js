import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Shoe extends Component {
    con

    remove = (id) => {
        console.log(id);
        axios.delete('https://shoes2match-be.herokuapp.com/'+ id)
        .then(response => {
            console.log(response)
            this.props.history.push('/list')
        })
        .catch(function (error){
            console.log(error);
        })
    }



    render() {
        console.log(this.props.location.state);
        return(
            <div className="details-box">
                <div className="shoe-details">
                    <h3>{this.props.location.state.pair.style}</h3>
                </div>
                <div className="shoe-details">
                    <h3>{this.props.location.state.pair.brand}</h3>
                </div>
                <div className="shoe-details">
                    <h3>{this.props.location.state.pair.color}</h3>
                </div>
                <div className="shoe-details">
                    <h3>{this.props.location.state.pair.size}</h3>
                </div>
                <div className="shoe-details">
                    <img src={this.props.location.state.pair.image} alt="no pic"/>
                </div>
                <button>
                    <Link to={{
                        pathname: "/edit/:id",
                        state: {
                        id: this.props.location.state.pair._id
                        }
                    }}
                    >Edit</Link></button>
                <button onClick={ () => {this.remove(this.props.location.state.pair._id)}}>Delete</button>
            </div>
        )
    }
}

export default Shoe;
