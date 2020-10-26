import React from 'react';
import './styles/Register.css';

class EditForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        loading: false,
        error: null             
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.props.sendData(name, value)       
      }

    async handleSubmit(event) {
      this.setState({
        loading: true
      })
      //event.preventDefault();
      try {
        let config = {
          method: 'PUT',
          headers: {
            'Accept':'application/json',
            'Content-type':'application/json'
          },
          body: JSON.stringify(this.props)
        };
        console.log(this.props)
        let res = await fetch('http://localhost:4000/'+this.props.id, config);
        let json = await res.json();
        console.log(json)

        this.setState({
          loading: false
        })
        //alert('Se editaron los datos correctamente')        
        
      } catch (error) {
            console.log('error: ',error)      
      }            
    }    
  
    render() {
      return (        
        <form
          onSubmit={this.handleSubmit}
        >   <div>
                <p>Editar operación número: {this.props.id}</p>
            </div>            
            <label>Concepto:</label>
            <input 
                name="edit_concept"
                type="text"
                value={this.props.concept}
                onChange={this.handleInputChange} />          
            <label>Cantidad:</label>
            <input
                name="edit_amount"
                type="number"
                value={this.props.amount}
                onChange={this.handleInputChange} />          
            <label>Fecha de la operación:</label>
            <input
                name="edit_op_date"
                type="date"
                value={this.props.op_date}
                onChange={this.handleInputChange} />                            
            <button type="submit">Enviar cambios</button>
        </form>
      );
    }
}

export default EditForm