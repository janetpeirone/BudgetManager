import React from 'react';
import ListByType from './ListByType';
import './styles/ListTable.css';
import Loading from './Loading';
import EditForm from './EditForm';

class ListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          type: 'Ingreso',
          loading: true,
          error: null,
          edit: false,
          submit: false,
          edit_id: '',
          edit_concept: '',
          edit_amount: 0,
          edit_op_date: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getData = this.getData.bind(this); 
        this.getEditData = this.getEditData.bind(this);       
    }
    
    async getData(val) {
        await this.setState({
            edit_id: val.id,
            edit_concept: val.concept,
            edit_amount: val.amount,
            edit_op_date: val.op_date.slice(0,10)
        })
        console.log('Edit selected id: ', this.state.edit_id)      
    }    

    async componentDidMount() {
        await this.fetchOperations(this.state.edit);        
    }    

    async handleInputChange(event) { 
        const value = event.target.value;                  
        await this.setState({
          type: value        
        }); 
        await this.fetchOperations(this.state.edit); 
    }

    async getEditData(name,value) {
        await this.setState({
            ...this.state, 
            [name]: value
        })
        console.log('Editando lo siguiente: ', name, value)      
    }

    fetchOperations = async () => {
        try {
            let res = await fetch('http://localhost:4000/operations/' + this.state.type);            
            let data = await res.json();
            this.setState({
                data,
                loading: false
            });
            console.log(data)
            
        } catch (error) {
            this.setState({
                loading: false,
                error
            });            
        }                
    }
    
    render() {
        if (this.state.loading)
            return <Loading />
        if (this.state.error)
            return <p>Ha ocurrido un error al cargar los datos</p>
        
        return (
            <div>
                <div>
                    <select 
                        id='list-select'
                        name="type" 
                        value={this.state.type} 
                        onChange={this.handleInputChange}>
                        <option value="Ingreso">Ingreso</option>
                        <option value="Egreso">Egreso</option>                
                    </select>           
                </div>
                <table id='list-table'>
                    <thead>                    
                        <tr>
                            <th>Concepto</th>
                            <th>Cantidad</th>
                            <th>Fecha</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.data.map((operation) =>
                            <ListByType
                                sendData={this.getData}
                                key={operation.id} 
                                id={operation.id}                               
                                concept={operation.concept}
                                amount={operation.amount}
                                op_date={operation.op_date}
                                date={operation.op_date.slice(8,10)+'/'+
                                    operation.op_date.slice(5,7)+'/'+
                                    operation.op_date.slice(0,4)}                            
                            />
                        )}
                    </tbody>                                                       
                </table>
                <div id='edit-form'>
                    <EditForm 
                        sendData={this.getEditData}
                        id={this.state.edit_id}
                        concept={this.state.edit_concept}
                        amount={this.state.edit_amount}
                        op_date={this.state.edit_op_date}
                        op_type={this.state.type}
                    /> 
                </div>                               
            </div>                                               
        )                   
    }
}

export default ListTable