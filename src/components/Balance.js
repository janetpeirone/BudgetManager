import React from 'react';
import './styles/Balance.css';

class Balance extends React.Component {
    render() {
        return (
            <div>
                <h3>El resultado actual de su balance es de: </h3>
                <p>{this.props.balance_result}</p>
            </div>                       
        )
    }
}

export default Balance