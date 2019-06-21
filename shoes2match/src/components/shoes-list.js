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
        axios.get('http://localhost:3000/shoes/')
            .then(response => {
                console.log(response)
                this.setState({allShoes: response.data})
            })
            .catch(function (error){
                console.log(error);
            })
    }

    // method to display the shoes
    // showShoes = () => {
    //     return this.state.allShoes.map((pair, i) => {
    //         return <Link to={"/"+pair._id}><img src="{pair.image}" alt={pair.style} /></Link>
    //     })
    // }

    render() {
        return(
            <div>
                <h3>Hello My Pretties</h3>
                <div>
                    { this.state.allShoes.map((pair, i) => {
                        return (
                            <Link to={{
                                pathname: "/:id",
                                state: {
                                        pair: pair,
                                }
                            }} key={i}>
                                <img src={pair.image} alt={pair.style}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ShoesList;

 // <a href=<Shoe pair={pair} key={i} /> className="shoe-pics"><img src="{pair.image}" alt={pair.style} /></a>

// <Link to={"/"+pair._id} pair={pair} key={i}><img src="{pair.image}" alt={pair.style} /></Link>
