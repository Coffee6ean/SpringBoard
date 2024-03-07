//import Child from './Family/Child';
import React, { useState } from 'react';
import Child from './FamilyContext/Child';
import Navbar from './Navbar';
import ThemeProvider from './ThemeProvider';
import './App.css';

function App() {
  /*
  const [themeColor, setThemeColor] = useState('purple');
  const toggleTheme = () => {
    setThemeColor(color => color === 'purple' ? 'teal' : 'purple');
  };
  */

  return (
    <div className="App">
      {/*
        <ThemeContext.Provider value={themeColor}>
          <Navbar/>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Child/>
        </ThemeContext.Provider>
      */}
      <ThemeProvider>
        <Navbar/>
        <Child/>
      </ThemeProvider>
    </div>
  );
}

export default App;
