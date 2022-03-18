import React, { useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  let letters = [];
  for (var i = 0; i < 4; i++) {
    letters.push(<li>{data[i]}</li>);
  }

  console.log(letters);
  return (
    <div className="App">
      <div className="block1">
        <input
          placeholder="placeholder"
          value={data}
          onInput={(ev) => setData(ev.target.value)}
        />
      </div>
      <div className="block2">
        <ul>{letters}</ul>
      </div>
    </div>
  );
}

export default App;
