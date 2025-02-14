import axios from "axios";
import { useEffect, useState } from "react";

import type { PlanteAdminType } from "../../lib/definitions";
import style from "./planteAdmin.module.css";

export default function PlanteAdmin() {
  const [plante, setPlante] = useState<PlanteAdminType[]>([]);

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
  return (
    <section className={style.card}>
      {plante.map((p) => (
        <div key={p.id} className={style.cartplante}>
          <section>
            <h2>{p.title}</h2>
            <p>{p.created_at} </p>
          </section>
        </div>
      ))}
    </section>
  );
}
