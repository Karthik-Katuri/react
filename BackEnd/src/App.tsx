import {  useState } from "react"
import ProductList from "./Components/ProductList";


function App() {
 
  const [category, setCategory]= useState(' ');

  return (<>
  
<div> 
 <ProductList category= {category}/>

  <select className="form-select" onChange={(event)=> setCategory(event.target.value)}>

    <option value=""></option>
    <option value="Clothing">Clothing</option>
    <option value="Household">Household</option>

    </select>
 

    
  </div>    
    </> )
}

export default App
