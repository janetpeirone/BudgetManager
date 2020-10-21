import React from 'react';
import './styles/LastOperations.css';

class LastOperations extends React.Component {
    render() {
        return (
            <table id='last_ten_table'>
                <tr>
                    <th>Concepto</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                    <th>Tipo</th>
                </tr>
                {this.props.list}                         
            </table>                                   
        )
    }
}

export default LastOperations