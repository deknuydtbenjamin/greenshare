import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import type { AuthType } from "../../lib/definitions";

export default function AdminPage() {
  const data = useLoaderData() as AuthType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.authentified) {
      navigate("/liste-plantes");
    }
  }, [data, navigate]);
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}
