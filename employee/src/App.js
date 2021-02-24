import Table from "./Components/Table";
import "./App.css";
import Navbar from "./Components/Nav/Nav";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <h1>Employee Directory</h1>
      <Table />
    </div>
  );
}

export default App;