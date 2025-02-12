import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { CategoryType, PlanteType } from "../../lib/definitions";
import style from "./planteForm.module.css";

export default function PlanteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanteType>();

  const formSubmit: SubmitHandler<PlanteType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/plantes`,
        data,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Réessayer plus tard");
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
        toast.error(
          "Impossible de charger les données, veuillez essayer ultérieurement.",
          {},
        );
      }
    };
    fetchData();
  }, []);

  return (
    <section className={style.plante}>
      <ToastContainer />
      <form onSubmit={handleSubmit(formSubmit)} className={style.form}>
        <label className={style.champ}>
          image
          <input type="file" {...register("picture")} />
        </label>
        <section className={style.info}>
          <label className={style.champ}>
            titre
            <input
              className={style.blocinput}
              type="text"
              {...register("title", {
                required: "champ obligatoire",
                minLength: {
                  value: 5,
                  message: "Ce champ doit contenir au minimun 5 lettres",
                },
                maxLength: {
                  value: 100,
                  message: "Ce champ doit contenir au maximun 100 lettres",
                },
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </label>
          <div>
            <label>
              Categorie
              <select className={style.bloc} {...register("category_id")}>
                {category.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Arrosage
              <select className={style.bloc} {...register("watering")}>
                <option value="1">💧</option>
                <option value="2">💧💧</option>
                <option value="3">💧💧💧</option>
              </select>
            </label>
            <label>
              Exposition
              <select className={style.bloc} {...register("plant_exhibition")}>
                <option value="1">☀️</option>
                <option value="2">⛅️</option>
                <option value="3">☁️</option>
              </select>
            </label>
          </div>
          <label className={style.champ}>
            Presentation
            <textarea
              className={style.textarea}
              {...register("summary", {
                required: "champ obligatoire",
                minLength: {
                  value: 20,
                  message: "Ce champ doit contenir au minimun 20 lettres",
                },
                maxLength: {
                  value: 500,
                  message: "Ce champ doit contenir maximun 500 lettres",
                },
              })}
            />
            {errors.summary && <p>{errors.summary.message}</p>}
          </label>

          <button type="submit" className={style.btn}>
            Ajouter une plante
          </button>
        </section>
      </form>
    </section>
  );
}
