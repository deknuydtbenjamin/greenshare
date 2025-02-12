import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { RoleType } from "../../lib/definitions";
import style from "./role.module.css";

export default function Role() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleType>();

  const roleSubmit: SubmitHandler<RoleType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/roles`,
        data,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Réessayer plus tard");
    }
  };

  const [role, setRole] = useState<RoleType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/roles`,
          {},
        );
        setRole(response.data);
      } catch (error) {
        toast.error(
          "Impossible de charger les données, veuillez essayer ultérieurement.",
          {},
        );
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (roleId: number) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/roles/${roleId}`);

      toast.success("Role supprimée avec succès !");
    } catch (error) {
      toast.error(
        "Erreur lors de la suppression, veuillez réesayer plus tard.",
      );
    }
  };

  return (
    <section>
      <section className={style.role}>
        <form onSubmit={handleSubmit(roleSubmit)} className={style.form}>
          <label className={style.champ}>
            Nom du role
            <input
              className={style.bloc}
              type="text"
              {...register("label", {
                required: "champ obligatoire",
                minLength: {
                  value: 2,
                  message: "Le role doit contenir au minimun 2 caratères",
                },
                maxLength: {
                  value: 20,
                  message: "Le role doit contenir au maximun 20 caractères",
                },
              })}
            />
            {errors.label && (
              <p className={style.error}>{errors.label.message}</p>
            )}
          </label>
          <button type="submit" className={style.btn}>
            {" "}
            Ajouter{" "}
          </button>
        </form>
      </section>
      <section className={style.card}>
        {role.map((r) => (
          <div key={r.id} className={style.cartrole}>
            <p>{r.label}</p>
            <button
              type="button"
              className={style.btndelete}
              onClick={() => handleDelete(r.id)}
            >
              Supprimer le role
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}
