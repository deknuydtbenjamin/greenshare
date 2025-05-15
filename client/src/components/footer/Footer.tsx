import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <section className={style.image}>
        <img
          src="/image/logo.webp"
          alt="logo Greenshare"
          className={style.logo}
        />
        <h3>GreenShare</h3>
        <section className={style.reseaux}>
          <img
            src="/image/logo-instagram.png"
            alt="logo Greenshare"
            className={style.logos}
          />
          <img
            src="/image/logo-linkedin.png"
            alt="logo Greenshare"
            className={style.logos}
          />
          <img
            src="/image/logo-youtube.png"
            alt="logo Greenshare"
            className={style.logos}
          />
        </section>
      </section>
      <div className={style.mention}>
        <p>Mentions légales et CGU </p>
      </div>
    </footer>
  );
}
