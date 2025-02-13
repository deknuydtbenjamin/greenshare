import axios from "axios";
import { useEffect, useState } from "react";
import type { PlanteType } from "../../lib/definitions";

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
    <section>
      {plante.map((p) => (
        <div key={p.id}>
          <img
            src={`${import.meta.env.VITE_API_URL}/assets/upload/${p.picture}`}
            alt={p.title}
          />
          <h2>{p.title}</h2>
          <p>{wateringemoji[p.watering as number]}</p>
          <p>{expositionemoji[p.plant_exhibition as number]}</p>
          <p>{p.category_id}</p>
          <p>{p.summary} </p>
        </div>
      ))}
    </section>
  );
}
