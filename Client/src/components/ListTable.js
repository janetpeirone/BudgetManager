import React from 'react';
import ListByType from './ListByType';
import './styles/ListTable.css';
import Loading from './Loading';

class ListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          type: 'Ingreso',
          loading: true,
          error: null,
          edit: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        //this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
        await this.fetchOperations();        
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

    async handleInputChange(event) { 
        const value = event.target.value;                  
        await this.setState({
          type: value        
        }); 
        await this.fetchOperations(); 
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
                                key={operation.id} 
                                id={operation.id}                               
                                concept={operation.concept}
                                amount={operation.amount}
                                date={operation.op_date.slice(8,10)+'/'+
                                    operation.op_date.slice(5,7)+'/'+
                                    operation.op_date.slice(0,4)}                            
                            />
                        )}
                    </tbody>                                                       
                </table>
            </div>                                               
        )
    }
}

export default ListTable