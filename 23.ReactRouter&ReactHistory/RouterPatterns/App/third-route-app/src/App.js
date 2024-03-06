import React from "react";
import {BrowserRouter} from "react-router-dom";
import RoutesList from "./RouteList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList/>
      </BrowserRouter>
    </div>
  );
}

export default App;
