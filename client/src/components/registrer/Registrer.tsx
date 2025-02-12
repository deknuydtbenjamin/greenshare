import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { PopUpType, UserType } from "../../lib/definitions";
import style from "./registrer.module.css";

export default function Registrer({ closePopUp }: PopUpType) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserType>();

  const sendData: SubmitHandler<UserType> = async (data) => {
    const { confirmPassword, ...rest } = data;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users`,
        rest,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Veuillez réessayer plus tard");
    }
  };

  return (
    <section className={style.inscription}>
      <form onSubmit={handleSubmit(sendData)} className={style.form}>
        <div>
          <h2>Inscription</h2>
        </div>
        <div>
          <label htmlFor="username" className={style.champ}>
            Identifiant
            <input
              className={style.bloc}
              type="text"
              {...register("username", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 2,
                  message: "Le pseudo doit contenir au moins 2 caratères",
                },
                maxLength: {
                  value: 20,
                  message: "Le pseudo doit contenir moins de 20 caractères",
                },
              })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </label>
        </div>
        <div>
          <label htmlFor="email" className={style.champ}>
            Adresse email
            <input
              className={style.bloc}
              type="email"
              {...register("email", { required: "Ce champ est obligatoire" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
        </div>

        <div>
          <label htmlFor="password" className={style.champ}>
            Mot de passe
            <input
              className={style.bloc}
              type="password"
              {...register("password", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe doit contenir au moins 12 caratères",
                },
                maxLength: {
                  value: 20,
                  message:
                    "Le mot de passe doit contenir moins de 20 caractères",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>
        </div>
        <div>
          <label htmlFor="confirmPassword" className={style.champ}>
            Confirmer le mot de passe
            <input
              className={style.bloc}
              type="password"
              {...register("confirmPassword", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe doit contenir au moins 12 caratères",
                },
                maxLength: {
                  value: 20,
                  message:
                    "Le mot de passe doit contenir moins de 20 caractères",
                },
                validate: (value: string) => {
                  if (watch("password") !== value) {
                    return "Le mot de passe saisit est différent";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </label>
        </div>

        <div>
          <button type="submit" className={style.btn}>
            Je m'inscris
          </button>
        </div>
        <button type="button" onClick={closePopUp} className={style.btnclose}>
          Fermer
        </button>
      </form>
    </section>
  );
}
