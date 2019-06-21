import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateShoe from './components/create-shoe';
import EditShoe from './components/edit-shoe';
import ShoesList from './components/shoes-list';


function App() {
  return (
      <Router>
        <div className="App">
        <nav>
            <ul>
                <li><Link to="/">Shoes2match</Link></li>
                <li><Link to="/create"> Create </Link></li>
                <li><Link to="/list"> Shoe List </Link></li>
            </ul>
        </nav>
        <br />
            <Route path="/list" exact component={ShoesList} />
            <Route path="/edit/:id" component={EditShoe} />
            <Route path="/create" component={CreateShoe} />
        </div>
    </Router>
  );
}

export default App;
