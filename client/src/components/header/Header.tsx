import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <img
          src="/image/logo.webp"
          alt="logo Greenshare"
          className={style.logo}
        />
        <section className={style.boutton}>
          <button type="button" className={style.btn}>
            se connecter
          </button>
          <button type="button" className={style.btn}>
            S'inscrire
          </button>
        </section>
      </nav>
      <section>
        <h1 className={style.title}>GREENSHARE</h1>
      </section>
    </header>
  );
}
