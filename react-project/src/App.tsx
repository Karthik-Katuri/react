import { useState } from "react";
import ListGroup from "./components/ListGroup/index";
import { BsFillCalendarFill } from "react-icons/bs";
import Button from "./components/Button/index";
import Like from "./components/Like/Like";

function App() {
  let items = ["New York", "Tokyo", "London", "Paris", "Delhi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <BsFillCalendarFill color="red" size="40" />
      <div>
        <ListGroup
          onSelectItem={handleSelectItem}
          items={items}
          heading="Cities"
        />
      </div>
      <div>
        <Button >My Button </Button>
      </div>
      <div>
        <Like></Like>
      </div>
    </>
  );
}

export default App;
