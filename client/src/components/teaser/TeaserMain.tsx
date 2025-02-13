import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { PlanteType } from "../../lib/definitions";

export default function TeaserMain() {
  const [plante, setPlante] = useState<PlanteType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/plantes/teaser`,
          {},
        );
        setPlante(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données, veuillez essayer ultérieurement.",
          {},
        );
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      {plante.map((p) => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <img
            src={`${import.meta.env.VITE_API_URL}/assets/upload/${p.picture}`}
            alt={p.title}
            // className={style.picture}
          />
        </div>
      ))}
    </section>
  );
}
