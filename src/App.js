import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Views/Home";

function App() {
  return (
    <div className="App">
      <div className="headerimg">
        <Header />
        <Home/>
      </div>
    </div>
  );
}

export default App;
