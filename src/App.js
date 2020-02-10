import React from 'react';
import './App.css';
import axios from 'axios'
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';



class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          shoes: []
      }

      this.createNewShoes = this.createNewShoes.bind(this);
      this.deleteShoes = this.deleteShoes.bind(this);

    }

  async componentDidMount(){
    const response = await axios.get("/data/shoes.json");

    this.setState({
      shoesList: response.data
  })

}
  

  createNewShoes(shoe){
    shoe.id = Date.now()
      this.setState({
        shoes: this.state.shoes.concat(shoe)
      })
  } 
  deleteShoes(deletedShoe){
      const myShoes = this.state.shoes.filter(shoe => !shoe.id ===deletedShoe.id);

      this.setState({
        shoes : myShoes
      })
  }

  
  render() {
    return (
      <div className="App">
        <Header greeting = "Welcome to My Shoe Closet" />
        <Nav shoes = {this.state.shoes}  onCreated={this.createNewShoes} onDelete = {this.deleteShoes}/>
        <Footer />
      </div>
    )
  }
 }
  

export default App;