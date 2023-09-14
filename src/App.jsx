import SimpleRouter from "./SimpleRouter/SimpleRouter";
import MuButton from "./components/MuButton";
import SimpleForm from "./components/SimpleForm";
import SimpleFormValidation from "./components/SimpleFormValidation";
import SeparateLinkRouter from "./SimpleRouter/SeparateLinkRouter";
import TaskList from "./TaskList/TaskList";
import TaskListWithContext from "./TaskListUsingContext/TaskListWithContext";
//import "./App.css";

function App() {
  //const items = ;
  //const items = [];

  return (
    <>
      {/* <MuButton /> */}
      {/* <SeparateLinkRouter /> */}
      <TaskListWithContext />
      {/* <SimpleFormValidation /> */}
      {/* <SimpleFilteredList /> */}
      {/* <ListGroup
        title="My title"
        //listItems={[]}
        listItems={["New York", "Tokyo", "London", "Paris"]}
      /> */}
    </>
  );
}

export default App;
