import { useState } from "react";
import ListGroup from "./components/ListGroup/index";
import { BsFillCalendarFill } from "react-icons/bs";
import Button from "./components/Button/index";
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
        <Button onClick={() => console.log("Clicked")}>My Button </Button>
      </div>
    </>
  );
}

export default App;
