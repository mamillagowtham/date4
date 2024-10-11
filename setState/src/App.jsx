
import React, { useState } from 'react'

const App = () => {
  const  [count,setCount]  = useState(0);
  const handleIncrease = ()=>
  {
   
   
    setCount((prev)=>prev+100);
    setCount((prev)=>prev+100);
    setCount((prev)=>prev+100);
    setCount((prev)=>prev+100);
    setCount((prev)=>prev+100);
   
   
  };

  const handleDecrease = ()=>{
  setCount(count -100);
  };
  return (
    <div>
      <h1>current {count}</h1>
      <button onClick={handleIncrease}>Increase By 100</button>
      <button onClick={handleDecrease}>Decrease By 100</button>
    </div>
  )
};

export default App