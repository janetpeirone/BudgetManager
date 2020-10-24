import React from 'react';

function LatestOperations (props) {    
  return(
    <tr>
      <td>{props.concept}</td>
      <td>$ {props.amount}</td>
      <td>{props.date}</td>
      <td>{props.type}</td>
    </tr>
  )     
}

export default LatestOperations