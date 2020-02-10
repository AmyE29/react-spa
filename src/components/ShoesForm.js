import React from 'react';

class ShoeForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            formItem: ""
        };
        this.createShoe = this.createShoe.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    createShoe(event){
        event.preventDefault();
        this.props.onCreated({name: this.state.formItem})
        this.setState({
            formItem: ""
        })
        
    }
    handleInputChange(event) {
      event.preventDefault()
  
      this.setState({
          formItem: event.target.value
        });
    }
    render() {
      return(
        <form onSubmit={this.createShoe}>
            <fieldset>
            <label>Add Shoe:</label>
            <input type="text" value={this.state.formItem} onChange={this.handleInputChange}/>
            <button>Add Shoe</button>
            </fieldset>
        </form>
      );
    }
}
export default ShoeForm;