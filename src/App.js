import NavBar from "./components/organisms/NavBar";
import SideBar from "./components/organisms/SideBar";
import Content from "./components/organisms/Content/Content";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app-sub-container">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
