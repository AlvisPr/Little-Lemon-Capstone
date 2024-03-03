
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav';
import React, { useState } from 'react';
import Reserve from './Components/Reserve';


function App() {
  const [showMainContent, setShowMainContent] = useState(true);
  const [showReserve, setShowReserve] = useState(false);

  const toggleReserve = () => {
    setShowMainContent(!showMainContent);
    setShowReserve(!showReserve);
  };

  return (
    <div className="App">
     <Nav/>
     {showMainContent && <Main onReserveClick={toggleReserve} />}
     {showReserve && <Reserve />}
     <Footer/>
    </div>
  );
}

export default App;
