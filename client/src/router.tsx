import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Category from "./components/category/Category";
import PlanteAdmin from "./components/planteAdmin/PlanteAdmin";
import PlanteCard from "./components/planteCard/PlanteCard";
import PlanteForm from "./components/planteForm/PlanteForm";
import Role from "./components/role/Role";
import AdminPage from "./pages/adminpage/AdminPage";
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
      {
        path: "/liste-plantes",
        element: <PlanteCard />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    loader: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/auth/adminChecking`, {
        credentials: "include",
      }),
    children: [
      {
        path: "/admin/role",
        element: <Role />,
      },
      {
        path: "/admin/categorie",
        element: <Category />,
      },
      {
        path: "/admin/plante",
        element: <PlanteAdmin />,
      },
    ],
  },
]);
