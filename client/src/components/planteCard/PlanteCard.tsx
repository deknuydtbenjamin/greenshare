import axios from "axios";
import { useEffect, useState } from "react";
import type { PlanteType } from "../../lib/definitions";
import Commentary from "../commentary/Commentary";
import style from "./planteCard.module.css";

export default function PlanteCard() {
  const [plante, setPlante] = useState<PlanteType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/plantes`,
          {},
        );
        setPlante(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const wateringemoji: Record<number, string> = {
    1: "💧",
    2: "💧💧",
    3: "💧💧💧",
  };
  const expositionemoji: Record<number, string> = {
    1: "☀️",
    2: "⛅️",
    3: "☁️",
  };

  return (
    <section className={style.planteCard}>
      {plante.map((p) => (
        <div key={p.id} className={style.card}>
          <img
            src={`${import.meta.env.VITE_API_URL}/assets/upload/${p.picture}`}
            alt={p.title}
            className={style.picture}
          />
          <section className={style.infocard}>
            <h2>{p.title}</h2>
            <div className={style.info}>
              <p> Categorie:{p.category_id}</p>
              <p>Arrosage: {wateringemoji[p.watering as number]}</p>
              <p> Exposition:{expositionemoji[p.plant_exhibition as number]}</p>
            </div>
            <p>{p.summary} </p>
            <Commentary planteId={p.id} />
          </section>
        </div>
      ))}
    </section>
  );
}
