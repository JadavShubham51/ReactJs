import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Hedaer from './Componets/Hedaer';
import Usestate from './Componets/Usestate';
import UseEffect from './Componets/UseEffect';
import Useref from './Componets/Useref';
import PropDrilling from './Componets/PropDrilling';
import ContextAPI from './Componets/ContextAPI';
import UseContext from './Componets/UseContext';
import Usemeno from './Componets/Usemeno';
import Usecallback from './Componets/Usecallback';
import Frominreact from './Componets/Frominreact';
import LiftingSate from './Componets/LiftingSate';
import Form from './Project/Form';
import List0fmap from './Componets/List0fmap';
import UseStateObject from './Componets/UseStateObject';
import UseStateArray from './Componets/UseStateArray';
import TodoList from './Project/TodoList';
import UseReducer from './Componets/UseReducer';
import Customhook from './Componets/Customhook';
import AxiousTorial from './Axios/AxiousTorial';
import PostAxios from './Axios/PostAxios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      {/* <Hedaer name="shubham"/>
      <Hedaer name="jainy"/>
      <Hedaer name="sujal"/> */}
      {/* <Usestate /> */}
      {/* <UseEffect /> */}
      {/* <Useref/> */}
      {/* <PropDrilling/> */}
      {/* <ContextAPI/> */}
      {/* <UseContext/> */}
      {/* <Usemeno/> */}
      {/* <Usecallback/> */}
      {/* <Frominreact/> */}
      {/* <LiftingSate/> */}
      {/* <Form/> */}
      {/* <List0fmap/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
      <TodoList />
      {/* <UseReducer/> */}
      {/* <Customhook/> */}
      {/* <AxiousTorial/> */}
      {/* <PostAxios/> */}
      </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
