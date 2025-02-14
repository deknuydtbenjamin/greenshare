import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { CommentaryType } from "../../lib/definitions";

class CommentaryRepository {
  async create(commentary: Omit<CommentaryType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO commentary(com_content, plante_id, user_id)
            VALUE (?,?,2)
            `,
      [commentary.com_content, commentary.plante_id, commentary.user_id],
    );
    return result.insertId;
  }
  async read(planteId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT commentary.*,  user.username
      FROM commentary
      JOIN user ON commentary.user_id = user.id
      WHERE commentary.plante_id = ?
      ORDER BY commentary.created_at DESC
      `,
      [planteId],
    );
    return rows as CommentaryType[];
  }
}

export default new CommentaryRepository();
