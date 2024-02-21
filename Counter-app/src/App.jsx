import React, { useState } from 'react';
import './App.css'
import './index.css'
function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("clicked");
    setCounter(counter + 1);
  }

  const subValue = () => {
    console.log("clicked");
    if(counter>0){
    setCounter(counter - 1);}
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter App: {counter}</h2>
      <button onClick={addValue}>Click to increase</button>
      <br />
      <button onClick={subValue}>Click to decrease</button>
    </>
  );
}

export default App;
