import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h3>Multiple useReducer hook - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
      <span>First Counter: {count}</span>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <br /><br />
      <span>Second Counter: {count2}</span>
      <button onClick={() => dispatch2('increment')}>Increment</button>
      <button onClick={() => dispatch2('decrement')}>Decrement</button>
      <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  );
}

export default App;