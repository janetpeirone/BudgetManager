import React from 'react';
import './styles/Balance.css';

class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          result: '',          
        };
    
        this.handleChange = this.handleChange.bind(this);        
    }
    handleChange(event) {
        const target = event.target;
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      } 
      
    render() {
        return (
            <div>
                <h3>El resultado actual de su balance es de: </h3>
                <p>{this.props.balance_result}</p>
            </div>                       
        )
    }
}

export default Balance