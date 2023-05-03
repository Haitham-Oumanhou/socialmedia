import React from 'react';
import './App.css';
import './Header.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';



function App() {
  return (
    <div className="App">
        <Header></Header>
      <div className='App_body'>  
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Sidebar></Sidebar>
      </div>  
        
       
    </div>
  );
}

export default App;
