import React from "react";
import "./App.css";
import image from "./tic-tac-toe.png";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <img id = "logo" src={image} alt = "logo" />
      <Main />
    </div>
  );
}

export default App;
