import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const handleDelete = async (planteId: number) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/plantes/${planteId}`,
      );

      toast.success("plante supprimée avec succès !");
    } catch (error) {
      toast.error("Erreur lors de la suppression.");
    }
  };
  return (
    <section className={style.card}>
      {plante.map((p) => (
        <div key={p.id} className={style.cartplante}>
          <section>
            <h2>{p.title}</h2>
            <p>{p.created_at} </p>
          </section>
          <button
            type="button"
            className={style.btndelete}
            onClick={() => handleDelete(p.id)}
          >
            Supprimer
          </button>
        </div>
      ))}
    </section>
  );
}
