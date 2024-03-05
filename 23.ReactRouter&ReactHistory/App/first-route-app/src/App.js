import logo from './logo.svg';
import './App.css';
import Drink from './Drink';
import Eat from './Eat';
import Home from './Home';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const showPage = () => {
    if(page === 'home') return <Home/>
    if(page === 'eat') return <Eat/>
    if(page === 'drink') return <Drink/>
  }


  return (
    <div className="App">
      <nav>
        <a onClick={() => setPage('home')}>Home</a>
        <a onClick={() => setPage('eat')}>Eat</a>
        <a onClick={() => setPage('drink')}>Drink</a>
      </nav>
      {showPage()}
    </div>
  );
}

export default App;
