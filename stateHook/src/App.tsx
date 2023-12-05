import { useState } from "react";
import Message from "./Message";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/cart";
import ExpandableText from "./components/ExpandableText";

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
  const [tags, setTags] = useState(["happy ", "cheerfull"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  // sharing the state hook
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  //exercise
  const [games, setGames] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy pepparoni",
    toppings: ["Mushroom"],
  });

  const [cart, SetCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });

  //handleClick
  const handleClick = () => {
    SetCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });

    setDrink({ ...drink, Price: 6 });

    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 522202 },
    });
    //add to an array
    setTags([...tags, " exciting"]);
    // remove from an array
    setTags(tags.filter((tag) => tag !== "happy"));
    //update an array
    setTags(tags.map((tag) => (tag === "happy" ? " happiness" : tag)));

    // update array objects
    //setBugs(bugs.map(bug => bug.id === 1? {...bug, fixed: true}: bug))

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );

    setGames({ ...games, player: { ...games.player, name: "Bob" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };

  return (
    <>
      {drink.Price} <br />
      {customer.address.zipcode} <br />
      <button onClick={handleClick}>Show</button> <br />
      {tags} <br />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? " Fixed" : "New"}
        </p>
      ))}
      <Message />
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
      <div>
        <ExpandableText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam
          omnis impedit dolor alias. Impedit repudiandae error quibusdam debitis
          quam dolorem enim tempora expedita nobis doloribus, incidunt omnis
          minima architecto reiciendis praesentium, commodi cumque distinctio,
          placeat necessitatibus. Delectus velit officia quo consectetur iure
          molestias enim porro, quidem consequuntur sapiente facilis impedit
          excepturi placeat perferendis quia nobis nemo architecto rem repellat,
          esse iste! Quod dolores sint praesentium itaque obcaecati nemo, non
          tempore vel a dolor, ad voluptas dignissimos, ducimus sed quas.
          Suscipit laudantium, quae minus aliquid eligendi nulla explicabo
          voluptatibus temporibus. Iste unde laboriosam voluptas eaque tempora
          nemo dicta. Accusantium, libero.
        </ExpandableText>
      </div>
    </>
  );
}

export default App;
