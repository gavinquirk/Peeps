import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <NavBar />
        <Landing />
      </div>
    </div>
  );
}

export default App;
