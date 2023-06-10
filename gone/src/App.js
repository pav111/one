import { useState } from 'react';
import './App.css';

function App() {
  const [color,updateColor] = useState("");
  const [hex, updateHex] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert("color: "+color+" hex code: "+hex);
    updateColor("");
    updateHex("#000000");
  }
  return (
    <div className="App">
     <form onSubmit={submit}>
      <input value={color} onChange={(temp)=>updateColor(temp.target.value)} type='text' placeholder='enter color name'/>
      <br/>
      <br/>
      <input type='color' onChange={(temp)=>updateHex(temp.target.value)} value={hex} ></input>
      <br/>
      <br/>
      <button >submit</button>
     </form>
    </div>
  );
}

export default App;
