import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
      <Header className="header" />
    </div>
  );
}

export default App;
