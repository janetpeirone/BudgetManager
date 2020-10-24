import React from 'react';
import LastOperations from './LastOperations';
import './styles/LastOperations.css'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []          
        };
    }
    componentDidMount() {
        this.setState({
        data: [{
              "id": 1, 
              "concept": "Cobro del mes", 
              "amount":50000, 
              "date":"23/03/1992",
              "type":"Ingreso"
              },{
              "id": 2, 
              "concept": "Compra comida", 
              "amount":1500, 
              "date":"25/03/1992",
              "type":"Egreso"
             },{
              "id": 3, 
              "concept": "Cobro alquiler", 
              "amount":5500, 
              "date":"28/03/1992",
              "type":"Ingreso" 
            },{
              "id": 4, 
              "concept": "Compra ferretería", 
              "amount":500, 
              "date":"23/03/1992",
              "type":"Egreso" 
            }]
        });
    }

    render() {
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
                        <LastOperations 
                            key={operation.id}
                            concept={operation.concept}
                            amount={operation.amount}
                            date={operation.date}
                            type={operation.type}
                        />
                    )}
                </tbody>                                                       
            </table>                                   
        )
    }
}

export default Table