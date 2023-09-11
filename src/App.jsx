import logo from "./logo.svg";
import Counter from "./components/Counter";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  //const items = ;
  //const items = [];

  return (
    <>
      <ListGroup
        title="My title"
        //listItems={[]}
        listItems={["New York", "Tokyo", "London", "Paris"]}
      />
    </>
  );
}

export default App;
