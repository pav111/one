import React, { useReducer } from 'react';
import './App.css';

function App() {
  const initialState = {
    color: "",
    hex: "#000000"
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_COLOR':
        return { ...state, color: action.payload };
      case 'UPDATE_HEX':
        return { ...state, hex: action.payload };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (e) => {
    e.preventDefault();
    alert("color: " + state.color + " hex code: " + state.hex);
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          value={state.color}
          onChange={(e) => dispatch({ type: 'UPDATE_COLOR', payload: e.target.value })}
          type='text'
          placeholder='enter color name'
        />
        <br/>
        <br/>
        <input
          type='color'
          onChange={(e) => dispatch({ typ: 'UPDATE_HEX', payload: e.target.value })}
          value={state.hex}
        />
        <br/>
        <br/>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
