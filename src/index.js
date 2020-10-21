import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register'

import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const user = {
//   firstname: 'Janet',
//   lastname: 'Peirone'
// }

// function getName(user) {
//   return `${user.firstname} ${user.lastname}`
// }

// function getGreeting(user) {
//   if (user){
//   return <h3>Hola, {getName(user)}</h3>
//   }
//   return <h3>Bienvenido...</h3>
// }

const container = document.getElementById('register_form');

ReactDOM.render(<Register />,container);


