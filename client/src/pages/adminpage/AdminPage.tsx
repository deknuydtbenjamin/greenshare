import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/AdminHeader";

export default function AdminPage() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}
