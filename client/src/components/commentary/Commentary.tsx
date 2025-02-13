import axios from "axios";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { CommentaryType } from "../../lib/definitions";
import style from "./commentary.module.css";

export default function Commentary({ planteId }: { planteId: number }) {
  const [commentary, setCommentary] = useState<CommentaryType[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentaryType>();

  const formSubmit: SubmitHandler<CommentaryType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/commentary`,
        {
          ...data,
          plante_id: planteId,
        },
      );
      toast.success(response.data.message, {});
    } catch (err) {
      toast.error("Erreur lors de l'ajout du commentaire", {});
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/commentary/${planteId}
          `,
        );

        setCommentary(response.data);
      } catch (error) {
        toast.error("Impossible de charger les commentaire", {});
      }
    };
    fetchData();
  }, [planteId]);

  return (
    <section>
      <form onSubmit={handleSubmit(formSubmit)} className={style.form}>
        <label className={style.com} htmlFor="com_content">
          <textarea
            className={style.text}
            placeholder="Commentaire"
            {...register("com_content", {
              required: true,
              minLength: {
                value: 5,
                message: "le commentaire doit contenir minimun 5 caractére ",
              },
              maxLength: {
                value: 255,
                message: "le commentaire doit contenir maximun 255 caractére ",
              },
            })}
          />
          {errors.com_content && <p>{errors.com_content.message}</p>}
        </label>
        <button type="submit" className={style.btn}>
          Ajouter
        </button>
      </form>
      <section className={style.post}>
        {commentary.map((com) => (
          <div key={com.id} className={style.compost}>
            <p className={style.user}>{com.username}</p>
            <p className={style.commentaire}>{com.com_content}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
