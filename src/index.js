import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register'
import Balance from './components/Balance'
import LastOperations from './components/LastOperations'

import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const resultado_test = {
  total: '260',
}

function getTotal(resultado_test) {
  return `$ ${resultado_test.total}`
}

// function getGreeting(user) {
//   if (user){
//   return <h3>Hola, {getName(user)}</h3>
//   }
//   return <h3>Bienvenido...</h3>
// }

const register_container = document.getElementById('register_form');
ReactDOM.render(<Register />,register_container);

const home_container = document.getElementById('balance_content');
ReactDOM.render(<Balance 
                    balance_result= { getTotal(resultado_test) }
                />,home_container);

const posts = [
    {id: 1, concept: 'Cobro del mes', amount:500, date:'23/03/1992',type:'Ingreso'},
    {id: 2, concept: 'Impuestos', amount:40, date:'25/03/1992',type:'Egreso'},
    {id: 3, concept: 'Ropa', amount:200, date:'28/03/1992',type:'Egreso'},
];     

function createList(operations) {
    const list = operations.map((post) =>
    <tr>
        <td>{post.concept}</td>
        <td>$ {post.amount}</td>
        <td>{post.date}</td>
        <td>{post.type}</td>
    </tr>    
    );
    return list;
}

ReactDOM.render(<LastOperations 
    list= { createList(posts) }            
/>, document.getElementById('last_op_content'));

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
