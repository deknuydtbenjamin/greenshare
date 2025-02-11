import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Connexion from "./components/connexion/Connexion";
import Registrer from "./components/registrer/Registrer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/r",
    element: <Registrer />,
  },
  {
    path: "/c",
    element: <Connexion />,
  },
]);
