import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Category from "./components/category/Category";
import Connexion from "./components/connexion/Connexion";
import Registrer from "./components/registrer/Registrer";
import Role from "./components/role/Role";

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
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/role",
    element: <Role />,
  },
  {
    path: "/categorie",
    element: <Category />,
  },
]);
