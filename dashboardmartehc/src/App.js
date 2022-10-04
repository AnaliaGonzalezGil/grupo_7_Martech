import './app.css';
import React, { useState, useEffect } from "react";
import SideBar from './components/SideBar';
import ListaUsuarios from './components/ListaUsuarios'
import ContentWrapper from './components/ContentWrapper';
const API_URL_USERS = "http://localhost:3000/api/users"
// const API_URL_PRODUCTS = "http://localhost:3000/api/products"
const xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status ===200){
    console.log(this.response);
  }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", API_URL_USERS);
// xhr.open("GET", API_URL_PRODUCTS);
xhr.send();


function App() {
  
  return (
    <React.Fragment>
      	<div id="wrapper">
          
          <SideBar />
          <listaUsuarios />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
