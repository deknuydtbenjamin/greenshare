import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../../lib/definitions";

export default function Connexion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

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
    } catch (error) {
      toast.error("Erreur dans la connexion");
    }
  };

  return (
    <>
      <section>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit(submitLog)}>
          <label htmlFor="username">
            Identifiant
            <input
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
          <label htmlFor="">
            Mot de passe
            <input
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
          <button type="submit">Se connecter</button>
        </form>
      </section>
    </>
  );
}
