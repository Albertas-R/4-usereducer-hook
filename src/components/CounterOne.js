// useReducer (simple state & simple action)

// 1. import useReducer from React

// 2. use useReducer(reducer, initialState) and define initialState and reducer function

// 3. hold value to dislpay in JSX and need to call reducer function with appropriate action: useReducer(reducer, initialState); -> const [newState, dispatch] = useReducer(reducer, initialState);

import React, { useReducer } from "react";

const initialState = 0;

// const reducer = (currentState, action) => {
//   return newState;
// };
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  // useReducer returns a pair of values: [newState, dispatch method] 
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
