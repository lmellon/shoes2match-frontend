import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return(
            <div className="landing">
                <div className="welcome">
                    <h1>Shoes2match</h1><br />
                    <h3>A Virtual Shoe Closet!</h3>
                    <p>Ever wonder if you have shoes to match that great outfit?  No longer!  With the <em>Shoes2match</em> app, you can keep a record of all the shoes you own right at your fingertips.  Log the brand, color, size and image so you can always know if you have the perfect shoes. Picking the perfect ensemble has never been easier.</p>
                </div>
                <div className="landing-image">
                    <img src="https://i.pinimg.com/originals/a3/7a/86/a37a861360d53b66918c3facafd1dd3c.jpg" alt="shoe closet" />
                </div>
            </div>
        )
    }
}

export default Landing;
