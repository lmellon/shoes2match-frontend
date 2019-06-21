import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shoe extends Component {
    render() {
        return(
            <div className="details-box">
                <div className="shoe-details">
                    shoe details
                </div>
                <button><Link to="/edit/:id">Edit</Link></button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Shoe;
