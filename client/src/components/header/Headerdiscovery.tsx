import { useState } from "react";
import Connexion from "../connexion/Connexion";
import Registrer from "../registrer/Registrer";
import style from "./header.module.css";

export default function Header() {
  const [isConnect, setIsConnect] = useState(false);
  const closeConnect = () => {
    setIsConnect(false);
  };

  const [isRegistrer, setIsRegistrer] = useState(false);
  const closeRegistrer = () => {
    setIsRegistrer(false);
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <img
          src="/image/logo.webp"
          alt="logo Greenshare"
          className={style.logo}
        />
        <section className={style.boutton}>
          <button
            type="button"
            className={style.btn}
            onClick={() => setIsConnect(true)}
          >
            se connecter
          </button>
          {isConnect && <Connexion closePopUp={closeConnect} />}
          <button
            type="button"
            className={style.btn}
            onClick={() => setIsRegistrer(true)}
          >
            S'inscrire
          </button>
          {isRegistrer && <Registrer closePopUp={closeRegistrer} />}
        </section>
      </nav>
      <section className={style.conseil}>
        <h1 className={style.title}>GREENSHARE</h1>
        <p className={style.text}>
          Communauté dédiée au partage, à l'échange de plantes et aux conseils
          entre passionnés
        </p>
      </section>
    </header>
  );
}
