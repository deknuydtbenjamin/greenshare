import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import type { PlanteType } from "../../lib/definitions";
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

  return (
    <section>
      <ToastContainer />
      <form onSubmit={handleSubmit(formSubmit)}>
        <label>
          titre
          <input
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
          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <label>
          image
          <input type="file" {...register("picture")} />
        </label>
        <label>
          Presentation
          <textarea
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
        </label>
        <label>
          Arrosage
          <select {...register("watering")}>
            <option value="1">💧</option>
            <option value="2">💧💧</option>
            <option value="3">💧💧💧</option>
          </select>
        </label>
        <label>
          exposition
          <select {...register("plant_exhibition")}>
            <option value="1">☀️</option>
            <option value="2">⛅️</option>
            <option value="3">☁️</option>
          </select>
        </label>
        <button type="submit">Ajouter une plante</button>
      </form>
    </section>
  );
}
