import React from 'react';
import './App.css';
import './Header.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widget from './Contacts';
import { useStateValue } from './StateProvider';



function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    
    <div className="App">
        
        {!user ?(<Login></Login>)  :
        (
      <>
      <Header></Header>
      <div className='App_body'> 
          
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Widget></Widget>
        </div>
      
      </>   
  )}
       
    </div>
  );
}

export default App;
