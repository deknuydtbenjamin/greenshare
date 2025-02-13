import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { PopUpType, UserType } from "../../lib/definitions";
import style from "./connexion.module.css";

export default function Connexion({ closePopUp }: PopUpType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();
  const navigate = useNavigate();

  const submitLog: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        data,
        {
          withCredentials: true,
        },
      );
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/liste-plantes");
      }, 1000);
    } catch (error) {
      toast.error("Erreur dans la connexion");
    }
  };

  return (
    <>
      <section className={style.connexion}>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit(submitLog)} className={style.form}>
          <label htmlFor="username" className={style.champ}>
            Identifiant
            <input
              className={style.bloc}
              type="text"
              {...register("username", {
                required: "Champ obligatoire",
                minLength: {
                  value: 2,
                  message: "L'identifiant' doit contenir 2 caratères minimun",
                },
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </label>
          <label htmlFor="password" className={style.champ}>
            Mot de passe
            <input
              className={style.bloc}
              type="password"
              {...register("password", {
                required: "champ obligatoire",
                minLength: {
                  value: 8,
                  message: "Le mot de passe doit contenir 8 caratères minimun",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
          <button type="submit" className={style.btn}>
            Se connecter
          </button>
          <button type="button" onClick={closePopUp} className={style.btnclose}>
            Fermer
          </button>
        </form>
      </section>
    </>
  );
}
