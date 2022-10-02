import logo from './logo.svg';
import './App.css';
import React from "react";


const API_URL_USERS = "http://localhost:3000/api/users"
const API_URL_PRODUCTS = "http://localhost:3000/api/products"
const xhr = new XMLHttpRequest();


function onRequestHandler() {
  if (this.readyState === 4 && this.status ===200){
    console.log(this.response);
  }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", API_URL_USERS);
xhr.open("GET", API_URL_PRODUCTS);
xhr.send();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
