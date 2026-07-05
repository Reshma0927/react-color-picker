import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [color, setColor] = useState("#d1dbe1");

  return (
    <div className="container">

      <h1>🎨 Color Picker</h1>

      <div
        className="preview"
        style={{ backgroundColor: color }}
      ></div>

      <label>Choose a Color:</label>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <p>Selected Color:</p>
      <h2>{color}</h2>

    </div>
  );
};

export default App;