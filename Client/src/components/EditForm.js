import React from 'react';
import './styles/Register.css';

class EditForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        loading: false,
        error: null,  
        data: {
            concept:'',
            amount:0,
            op_date:''
        }      
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            data: {
                concept: this.props.concept,
                amount: this.props.amount,
                op_date: this.props.op_date
            }
        });
        console.log(this.state.data)
    }
  
    handleInputChange(event) {
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          data: {...this.state.data,
            [name]: value}        
        });
        this.props = {[name]:value}
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
          body: JSON.stringify(this.state.data)
        };
        console.log(this.state.data)
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
                <label>Editar operación número: {this.props.id}</label>
            </div>            
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
            <button type="submit">Enviar cambios</button>
        </form>
      );
    }
}

export default EditForm