import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { RoleType } from "../../lib/definitions";

class RoleRepository {
  async create(role: Omit<RoleType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO role (label)
            VALUE (?)`,
      [role.label],
    );
    return result.insertId;
  }

  async read() {
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT id, label
        FROM role
        `,
    );
    return rows as RoleType[];
  }
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `
        DELETE FROM role
        WHERE id = ?
        `,
      [id],
    );
    return result.affectedRows;
  }
}

export default new RoleRepository();
