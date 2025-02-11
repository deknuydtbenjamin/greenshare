import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { UserType } from "../../lib/definitions";

export default function Connexion() {
  const { register, handleSubmit } = useForm<UserType>();

  const submitLog: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        data,
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Erreur dans la connexion");
    }
  };

  return (
    <>
      <ToastContainer />
      <section>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit(submitLog)}>
          <label htmlFor="username">
            Identifiant
            <input
              type="text"
              {...register("username", {
                required: "Champ obligatoire",
              })}
            />
          </label>
          <label htmlFor="">
            Mot de passe
            <input type="password" {...register("password")} />
          </label>
          <button type="submit">Se connecter</button>
        </form>
      </section>
    </>
  );
}
