import './app.css';
import React, { useState, useEffect } from "react";
import SideBar from './components/SideBar';
import ListaUsuarios from './components/ListaUsuarios'
import ContentWrapper from './components/ContentWrapper';


function App() {
  
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ListaUsuarios />
          <ContentWrapper />
        </div>
    </React.Fragment>
  )
}

export default App;
