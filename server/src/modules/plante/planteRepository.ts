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
        plante.category_id,
        1,
      ],
    );
    return result.insertId;
  }
  async read() {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT *
      FROM plante
      ORDER BY created_at DESC`,
    );
    return rows as PlanteType[];
  }
}
export default new PlanteRepository();
