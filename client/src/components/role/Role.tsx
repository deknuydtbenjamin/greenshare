import axios from "axios";
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

  return (
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
  );
}
