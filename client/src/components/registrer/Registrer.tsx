import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../../lib/definitions";

export default function Registrer() {
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
    <section>
      <form onSubmit={handleSubmit(sendData)}>
        <div>
          <h2>Inscription</h2>
        </div>
        <div>
          <label htmlFor="username">
            Identifiant
            <input
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
          <label htmlFor="email">
            Adresse email
            <input
              type="email"
              {...register("email", { required: "Ce champ est obligatoire" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Mot de passe
            <input
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
          <label htmlFor="confirmPassword">
            Confirmer le mot de passe
            <input
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
          <button type="submit">Je m'inscris</button>
        </div>
      </form>
    </section>
  );
}
