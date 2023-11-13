import { useState } from "react";
import ListGroup from "./components/ListGroup/index";
function App() {
    
  let items = ["New York", "Tokyo", "London", "Paris", "Delhi"];
  const handleSelectItem = (item:string)=>{
    console.log(item)
  }
  return <div><ListGroup onSelectItem={handleSelectItem} items={items} heading="Cities"/></div>
}

export default App;
