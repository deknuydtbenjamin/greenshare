import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { CategoryType } from "../../lib/definitions";
import style from "./category.module.css";

export default function Category() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryType>();

  const formSubmit: SubmitHandler<CategoryType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/category`,
        data,
      );
      toast.success(response.data.message, {});
    } catch (err) {
      toast.error("Erreur lors de l'ajout de la catégorie", {});
    }
  };

  const [category, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/category`,
          {},
        );
        setCategory(response.data);
      } catch (error) {
        toast.error("Impossible de charger les données.", {});
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <section className={style.category}>
        <ToastContainer />
        <form onSubmit={handleSubmit(formSubmit)} className={style.form}>
          <label className={style.champ}>
            Nom de la categorie
            <input
              className={style.bloc}
              type="text"
              {...register("label", {
                required: "champ obligatoire",
                minLength: {
                  value: 2,
                  message: "le champ doit contenir au minimum 3 caractères",
                },
                maxLength: {
                  value: 30,
                  message: "le champ doit contenir au maximun 30 caractères",
                },
              })}
            />
            {errors.label && <p>{errors.label.message}</p>}
          </label>
          <button type="submit" className={style.btn}>
            Ajouter
          </button>
        </form>
      </section>
      <section className={style.card}>
        {category.map((c) => (
          <div key={c.id} className={style.cartrole}>
            <p>{c.label}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
