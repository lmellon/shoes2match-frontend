import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Shoe from './shoe';
import axios from 'axios';


class ShoesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allShoes: []
        }
    }

    // method to retrieve the info in the database
    componentDidMount = () => {
        axios.get('https://shoes2match-be.herokuapp.com/')
            .then(response => {
                console.log(response)
                this.setState({allShoes: response.data})
            })
            .catch(function (error){
                console.log(error);
            })
    }

    // method to handle new shoe
    // handleCreateShoe = (newShoe) => {
    //     console.log(newShoe);
    //     // add newShoe to database using axios
    //     axios.post('https://shoes2match-be.herokuapp.com/add', newShoe)
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState( prevState => {
    //                 prevState['allShoes'].push(newShoe);
    //                 return{ ['allShoes']: prevState['allShoes'] }
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    render() {
        return(
            <div className="shoe-list">
                <h2>Hello My Pretties...</h2>
                <div className="all-shoes-container">
                    <div className="all-shoes">
                        { this.state.allShoes.map((pair, i) => {
                            return (
                                <Link to={{
                                    pathname: "/:id",
                                    state: {
                                            pair: pair,
                                    }
                                }} key={i}
                                >
                                    <img
                                        className="list-images"
                                        src={pair.image} alt={pair.style}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoesList;

 // <a href=<Shoe pair={pair} key={i} /> className="shoe-pics"><img src="{pair.image}" alt={pair.style} /></a>

// <Link to={"/"+pair._id} pair={pair} key={i}><img src="{pair.image}" alt={pair.style} /></Link>
