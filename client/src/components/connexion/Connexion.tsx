import { useForm } from "react-hook-form";
import type { UserType } from "../../lib/definitions";

export default function Connexion() {
  const { register } = useForm<UserType>();
  return (
    <>
      <section>
        <h2>Se connecter</h2>
        <form>
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
          <button type="button">Se connecter</button>
        </form>
      </section>
    </>
  );
}
