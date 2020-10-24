import React from 'react';
import LatestOperations from './LatestOperations';
import './styles/LastOperations.css';
import Loading from './Loading';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loading: true,
          error: null
        };
    }
    
    async componentDidMount() {
        await this.fetchOperations();        
    }    

    fetchOperations = async () => {
        try {
            let res = await fetch('http://localhost:4000/latestoperations');
            let data = await res.json();
            this.setState({
                data,
                loading: false
            });
            
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
            return <p>Ha ocurrido un error</p>
        return (
            <table>
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Cantidad</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.data.map((operation) =>
                        <LatestOperations 
                            key={operation.id}
                            concept={operation.concept}
                            amount={operation.amount}
                            date={operation.op_date.slice(8,10)+'/'+
                                operation.op_date.slice(5,7)+'/'+
                                operation.op_date.slice(0,4)}
                            type={operation.op_type}
                        />
                    )}
                </tbody>                                                       
            </table>                                   
        )
    }
}

export default Table