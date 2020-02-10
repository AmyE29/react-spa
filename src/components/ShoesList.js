import React from 'react';
import Shoes from './Shoes';
import ShoesForm from './ShoesForm';
import ShoesDetail from './ShoesDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ShoesList extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
    <> 
    <Router>
    <h1>My Shoe Closet</h1>
    <p>I have {this.props.count} pairs of shoes</p>
     <ul>
       {this.props.shoes.map(shoe => <><Shoes shoe ={shoe} onDelete={this.props.onDelete}/> <Link to = {`/shoes/${shoe.id}`}>Detail</Link>
      
      <Switch>
        <Route path={`/shoes/${shoe.id}/`}>
          <ShoesDetail shoe = {shoe}/>
        </Route>
      </Switch>
    
       </>)}
     </ul>
    
    <ShoesForm onCreated={this.props.onCreated}/>
    </Router>
    </>
    )
  }
}

export default ShoesList;