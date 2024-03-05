import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Food from './Food';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/food/:name" element={<Food/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
