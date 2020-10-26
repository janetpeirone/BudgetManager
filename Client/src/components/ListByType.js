import React from 'react';

class ListByType extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          error: null
        };

        this.handleClick = this.handleClick.bind(this);        
    }

    handleClick(event) { 
        this.props.sendData(this.props)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.value !== nextState.value;
    // }

    render() {
        return(
            <tr>
                <td onClick={this.handleClick}>{this.props.concept}</td>
                <td onClick={this.handleClick}>$ {this.props.amount}</td>
                <td onClick={this.handleClick}>{this.props.date}</td>      
            </tr>
        )        
    }    
}

export default ListByType