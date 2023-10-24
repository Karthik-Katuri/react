import ListGroup from "./components/ListGroup";
function App() {
    let items = ["New York", "Tokyo", "London", "Paris", "Delhi"];
return <div><ListGroup items={items} heading="Cities"/></div>

}

export default App;