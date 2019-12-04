import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import PeopleBox from './components/PeopleBox/PeopleBox';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <NavBar />
        <PeopleBox />
      </div>
    </div>
  );
}

export default App;
