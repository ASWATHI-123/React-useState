
import React, { useState } from 'react';
import "./components/App.css";


function App() {

  const [count,setCount] = useState(0);
  const increment = () =>setCount(count + 1);
  const reset = () => setCount(0);
  
  return (
    <div className='App'>
      <h1>Counter :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default App;
