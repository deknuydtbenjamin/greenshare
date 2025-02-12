import { pl } from "@faker-js/faker/.";
import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { PlanteType } from "../../lib/definitions";

class PlanteRepository {
  async create(plante: Omit<PlanteType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO plante (title, picture, summary, watering, plant_exhibition, category_id, user_id)
            VALUE(?,?,?,?,?,?,?)
            `,
      [
        plante.title,
        plante.picture,
        plante.summary,
        plante.watering,
        plante.plant_exhibition,
        1,
        1,
      ],
    );
    return result.insertId;
  }
}
export default new PlanteRepository();
