import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from "./Components/AddTask/AddTask"
import ListTask from "./Components/ListTask/ListTask";
function App() {

  return (
    <div className="App">
 <h1>to do list</h1>
 <AddTask/>
 <ListTask/>
    </div>
  );
}

export default App;
