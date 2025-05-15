import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HeaderHomePage from "./components/headerHomePage/HeaderHomePage";

function App() {
  return (
    <>
      <HeaderHomePage />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
