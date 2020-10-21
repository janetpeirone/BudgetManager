import React from 'react';
import './styles/Register.css';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        concept: '',
        amount: 0,
        op_date: '',
        op_type: 'income'
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      //const value = target.type === 'checkbox' ? target.checked : target.value;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
      alert('Se ha registrado la operación correctamente');
      event.preventDefault();
    }
  
    render() {
      return (        
        <form>
          <label>Concepto:</label>
          <input 
            name="concept"
            type="text"
            value={this.state.concept}
            onChange={this.handleInputChange} />          
          <label>Cantidad:</label>
          <input
            name="amount"
            type="number"
            value={this.state.amount}
            onChange={this.handleInputChange} />          
          <label>Fecha de la operación:</label>
          <input
            name="op_date"
            type="date"
            value={this.state.op_date}
            onChange={this.handleInputChange} />          
          <label>Tipo de operación:</label>
          <select name="op_type" value={this.state.op_type} onChange={this.handleInputChange}>
            <option value="income">Ingreso</option>
            <option value="expenses">Egreso</option>                
          </select>            
          <button type="submit">Registrar</button>
        </form>
      );
    }
}

export default Register

