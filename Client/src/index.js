import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register';
import Balance from './components/Balance';
import Table from './components/Table';
import Welcome from './components/Welcome';
import ListTable from './components/ListTable';
import './index.css';

const home_container = document.getElementById('balance_content');
ReactDOM.render(<div>
                <Welcome 
                    username="Usuario de Prueba"
                />
                <Balance />
                </div>,
                home_container);
  
const table_container = document.getElementById('latests_op_content');
ReactDOM.render(<Table />, table_container);

const list_container = document.getElementById('list_content');
ReactDOM.render(<ListTable />, list_container);

const register_container = document.getElementById('register_form');
ReactDOM.render(<Register />,register_container);