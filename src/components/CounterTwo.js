// useReducer (complex state & complex action as objects)

// 1. import useReducer from React

// 2. use useReducer(reducer, initialState) and define initialState and reducer function

// 3. hold value to dislpay in JSX and need to call reducer function with appropriate action: useReducer(reducer, initialState); -> const [newState, dispatch] = useReducer(reducer, initialState);

import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

// const reducer = (currentState, action) => {
//   return newState;
// };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    // case "reset": // reset all counters
    //   return initialState;
    case "reset":
      return { ...state, firstCounter: 0 };
    case "reset2":
      return { ...state, secondCounter: 10 };
    
    default:
      return state;
  }
};

function CounterTwo() {
  // useReducer returns a pair of values: [newState, dispatch method]
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter - {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>Decrement 5</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <div>Second Counter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>Increment Second Counter</button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>Decrement Second Counter</button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>Increment Second Counter 5</button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>Decrement Second Counter 5</button>
      <button onClick={() => dispatch({ type: "reset2" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
