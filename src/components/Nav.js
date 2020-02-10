import React from 'react';
import ShoesList from './ShoesList';
import About from './About';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Nav extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/shoes">Shoes</Link>
              </li>
            </ul>
    
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/shoes">
                <ShoesList shoes = {this.props.shoes} count = {this.props.shoes.length} onCreated={this.props.HomecreateNewShoes} onDelete = {this.props.deleteShoes}/>    
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </nav>
        </Router>
    )
  }
}

export default Nav;