import React from 'react';

function LastOperations (props) {    
  return(
    <tr>
      <td>{props.concept}</td>
      <td>$ {props.amount}</td>
      <td>{props.date}</td>
      <td>{props.type}</td>
    </tr>
  )     
}

export default LastOperations