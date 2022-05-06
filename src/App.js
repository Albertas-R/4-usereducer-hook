import React from "react";
import "./App.css";

import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";

function App() {
  return (
    <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      
      {/* Multiple useReducers */}
      <CounterThree />
    </div>
  );
}

export default App;
