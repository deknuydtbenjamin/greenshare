import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { CategoryType } from "../../lib/definitions";

class CategoryRepository {
  async create(category: Omit<CategoryType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO category (label)
            VALUE(?)
            `,
      [category.label],
    );
    return result.insertId;
  }
  async read() {
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT id, label
        FROM category
        `,
    );
    return rows as CategoryType[];
  }
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `
        DELETE FROM category
        WHERE id = ?
        `,
      [id],
    );
    return result.affectedRows;
  }
}
export default new CategoryRepository();
