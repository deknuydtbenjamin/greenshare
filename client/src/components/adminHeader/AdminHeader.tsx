import { Link } from "react-router-dom";
import style from "./adminHeader.module.css";

export default function AdminHeader() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to="/admin/role" className={style.btn}>
          Role
        </Link>
        <Link to="/admin/categorie" className={style.btn}>
          Catégorie
        </Link>
        <Link to="/admin/plante" className={style.btn}>
          Plantes
        </Link>
      </nav>
      <section>
        <h1 className={style.title}>GREENSHARE</h1>
      </section>
    </header>
  );
}
