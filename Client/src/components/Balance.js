import React from 'react';
import './styles/Balance.css';

class Balance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        result: '',          
      };         
    }

    async componentDidMount() {
      await this.fetchOperations();        
    }    

    fetchOperations = async () => {
      try {
        let res = await fetch('http://localhost:4000/operations');
        let result = await res.json();
        let value = (result[0].value);        
        this.setState({
          result:value       
        });       
          
      } catch (error) {
        this.setState({
          result:'???'
        });            
      }                
    }     
      
    render() {
      return (
        <div>
            <h3>El resultado actual de su balance es de: </h3>
            <p>{this.state.result}</p>
        </div>                       
      )
    }
}

export default Balance