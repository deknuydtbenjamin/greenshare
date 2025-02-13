import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";
import type { CommentaryType } from "../../lib/definitions";

class CommentaryRepository {
  async create(commentary: Omit<CommentaryType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO commentary(com_content, plante_id, user_id)
            VALUE (?,?,?)
            `,
      [commentary.com_content, commentary.plante_id, commentary.user_id],
    );
    return result.insertId;
  }
}

export default new CommentaryRepository();
