import './app.css';
import React, { useState, useEffect } from "react";
import SideBar from './components/SideBar';

import ContentWrapper from './components/ContentWrapper';


function App() {
  
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          
          <ContentWrapper />
        </div>
    </React.Fragment>
  )
}

export default App;
