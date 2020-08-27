import React from "react";
import "./styles.css";
import Water from "./components/Water";

export default function App() {
  return (
    <div className="App">
      <h1>Water State Demo</h1>
      <h2>Toggel the Slider to change the state</h2>
      <Water />
    </div>
  );
}
