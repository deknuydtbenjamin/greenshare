import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Category from "./components/category/Category";
import Connexion from "./components/connexion/Connexion";
import PlanteForm from "./components/planteForm/PlanteForm";
import Registrer from "./components/registrer/Registrer";
import Role from "./components/role/Role";
import DiscoveryPage from "./pages/discoveryPage/DiscoveryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DiscoveryPage />,
  },

  {
    element: <App />,
    children: [
      {
        path: "/creerplante",
        element: <PlanteForm />,
      },
    ],
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
