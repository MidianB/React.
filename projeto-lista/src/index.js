import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

function numerosReducer (state = 0, action){
  if (action.type === "ADICIONAR"){
    return state +1;
  }
  else {
    return state;
  }
}
function nomeReducer(state ="Recode", action) {
  if (action.type ==="TEXTO"){
    return state + 1;

  }
  else {
    return state;
  }
}
const reducer = combineReducer({numerosReducer, nomeReducer})

const store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}>
   <App />
  </Provider>,
    
  document.getElementById('root')
);


