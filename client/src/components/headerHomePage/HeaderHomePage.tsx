import { Link } from "react-router-dom";
import style from "./headerHomePage.module.css";

export default function HeaderHomePage() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <img
          src="/image/logo.webp"
          alt="logo Greenshare"
          className={style.logo}
        />
        <section className={style.bouton}>
          <Link to="/liste-plantes" className={style.btn}>
            Toutes les plantes
          </Link>
          <Link to="/creerplante" className={style.btn}>
            Ajouter une plante
          </Link>
        </section>
      </nav>
      <section>
        <h1 className={style.title}>GREENSHARE</h1>
      </section>
    </header>
  );
}
