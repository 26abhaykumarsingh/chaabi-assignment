import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
      <div className="container">
        <Header className="header" />
        <Charts className="charts" />
      </div>
    </div>
  );
}

export default App;
