import "./App.css";
import { Outlet } from "react-router-dom";
import HeaderHomePage from "./headerHomePage/HeaderHomePage";

function App() {
  return (
    <>
      <HeaderHomePage />
      <Outlet />
    </>
  );
}

export default App;
