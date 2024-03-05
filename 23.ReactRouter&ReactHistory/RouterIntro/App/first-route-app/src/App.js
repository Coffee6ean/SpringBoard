import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Drink from './Drink';
import Eat from './Eat';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  /*
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
  */
  
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hungry" element={<Eat/>} />
          <Route path="/thirsty" element={<Drink/>} />
        </Routes>
        <footer>I am the footer</footer>
      </BrowserRouter>
      <h1>Some Other Content!</h1>
    </div>
  );
}

export default App;
