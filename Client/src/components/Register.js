import React from 'react';
import './styles/Register.css';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          concept: '',
          amount: 0,
          op_date: '',
          op_type: 'Ingreso'
        },
        loading: false,
        error: null        
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      //const value = target.type === 'checkbox' ? target.checked : target.value;
      const value = event.target.value;
      const name = event.target.name;
  
      this.setState({
        data: {...this.state.data,
          [name]: value}        
      });
    }

    async handleSubmit(event) {
      this.setState({
        loading: true
      })
      //event.preventDefault();
      try {
        let config = {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-type':'application/json'
          },
          body: JSON.stringify(this.state.data)
        };

        let res = await fetch('http://localhost:4000/operations', config);
        let json = await res.json();
        console.log(json)

        this.setState({
          loading: false
        })
        alert('Se cargaron los datos correctamente')        
        
      } catch (error) {
        //alert('Ha ocurrido un error en la carga de datos')      
      }            
    }
  
    render() {
      return (        
        <form
          onSubmit={this.handleSubmit}
        >
          <label>Concepto:</label>
          <input 
            name="concept"
            type="text"
            value={this.state.data.concept}
            onChange={this.handleInputChange} />          
          <label>Cantidad:</label>
          <input
            name="amount"
            type="number"
            value={this.state.data.amount}
            onChange={this.handleInputChange} />          
          <label>Fecha de la operación:</label>
          <input
            name="op_date"
            type="date"
            value={this.state.data.op_date}
            onChange={this.handleInputChange} />          
          <label>Tipo de operación:</label>
          <select 
            name="op_type" 
            value={this.state.data.op_type} 
            onChange={this.handleInputChange}>
            <option value="Ingreso">Ingreso</option>
            <option value="Egreso">Egreso</option>                
          </select>            
          <button type="submit">Registrar</button>
        </form>
      );
    }
}

export default Register

