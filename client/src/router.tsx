import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Category from "./components/category/Category";
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
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      {
        path: "/admin/role",
        element: <Role />,
      },
      {
        path: "/admin/categorie",
        element: <Category />,
      },
    ],
  },
]);
