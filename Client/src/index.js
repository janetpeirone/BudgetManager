import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register'
import Balance from './components/Balance'
import Table from './components/Table'
import Welcome from './components/Welcome'

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

const home_container = document.getElementById('balance_content');
ReactDOM.render(<div>
                <Welcome 
                    username="Janet Peirone"
                />
                <Balance 
                    balance_result={getTotal(resultado_test)}
                />
                </div>,
                home_container);
  
const table_container = document.getElementById('last_op_content');
ReactDOM.render(<Table />, table_container);

const register_container = document.getElementById('register_form');
ReactDOM.render(<Register />,register_container);