import MuButton from "./components/MuButton";
import SimpleForm from "./components/SimpleForm";
import SimpleFormValidation from "./components/SimpleFormValidation";
import TaskList from "./TaskList/TaskList";
import TaskListWithContext from "./TaskListUsingContext/TaskListWithContext";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  //const items = ;
  //const items = [];

  return (
    <>
      <nav className="down-margin">
        <span className="side-margin">
          <Link to="/MuButton">MuButton</Link>
        </span>
        <span className="side-margin">
          <Link to="/SimpleForm">SimpleForm</Link>
        </span>
        <span className="side-margin">
          <Link to="/SimpleFormValidation">SimpleFormValidation</Link>
        </span>
        <span className="side-margin">
          <Link to="/TaskList">TaskList</Link>
        </span>
        <span className="side-margin">
          <Link to="/TaskListWithContext">TaskListWithContext</Link>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/MuButton" element={<MuButton />} />
        <Route path="/SimpleForm" element={<SimpleForm />} />
        <Route path="/SimpleFormValidation" element={<SimpleFormValidation />} />
        <Route path="/TaskList" element={<TaskList />} />
        <Route path="/TaskListWithContext" element={<TaskListWithContext />} />
        <Route path="*" element={<div>No Component</div>} />
      </Routes>
    </>
  );
}

export default App;