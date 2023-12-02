import React, { useState } from 'react'

function App(){

  const [isVisible, setVisibility] =useState(false);
  let count = 0;

  const handleClick = () =>{
setVisibility(true);
count++;
console.log(isVisible);

  };

  
  return (
    <button onClick={handleClick}>Show</button>
  )
};

export default App