import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { CategoryType } from "../../lib/definitions";

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

  return (
    <section>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label>
          nom de la categorie
          <input
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
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
}
