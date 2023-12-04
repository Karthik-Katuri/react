import { useState } from "react";
import Message from "./Message";
import {produce} from "immer";
import NavBar from "./compnents/NavBar";
import Cart from "./compnents/cart";

function App() {
  const [drink, setDrink] = useState({
    title: "Pepsi",
    Price: 5,
  });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "Delhi",
      zipcode: 522201,
    },
  });
  const [tags, setTags] = useState(['happy ', 'cheerfull'])
  const [bugs, setBugs]= useState([
    {id : 1, title:'Bug 1', fixed:false},
    {id : 2, title:'Bug 2', fixed:false},
  ])
// sharing the state hook
  const[cartItems, setCartItems]=useState(['Product 1', 'Product 2'])
  
 
 //handleClick
  const handleClick = () => {
    setDrink({ ...drink, Price: 6 });

    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 522202 },
    });
    //add to an array
    setTags([...tags,' exciting']);
    // remove from an array
    setTags(tags.filter(tag => tag !=='happy'));
    //update an array
    setTags(tags.map(tag=> tag=== 'happy'? ' happiness':tag));

    // update array objects
    //setBugs(bugs.map(bug => bug.id === 1? {...bug, fixed: true}: bug))
    setBugs(produce(draft=> {
      const bug =draft.find(bug=> bug.id ===1);
      if (bug) bug.fixed = true;
    }))
  };

  return (
    <>
      {drink.Price} <br />
      {customer.address.zipcode} <br />
      <button onClick={handleClick}>Show</button> <br />
      {tags} <br />
      {bugs.map(bug => <p key = {bug.id}>{bug.title} {bug.fixed ? " Fixed" : "New"}</p>)}
      <Message />
      <div>
        <NavBar cartItemsCount={cartItems.length}/>
        <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
      </div>
    </>
  );
}

export default App;
