import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState([]);
  
  useEffect(()=>{fetch('https://api.github.com/users/pavantejavarre')
  .then((res) =>res.json())
  .then((data) => setData([data]))},[]);
  
  return (
    <div >
      <center>
        {data.map((temp,index)=>{
          return(
            <div key={index}>
              <p>{temp.name}</p>
            </div>
          );
        })} 
      </center>
    </div>
  );
}

export default App;
