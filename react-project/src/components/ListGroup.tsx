function ListGroup() {
  let items = ["New York", "Tokyo", "London", "Paris", "Delhi"];
  items = [];
 
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item FOUND</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
