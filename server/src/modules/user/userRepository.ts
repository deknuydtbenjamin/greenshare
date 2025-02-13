import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

import type { UserType } from "../../lib/definitions";

class userRepository {
  async create(user: Omit<UserType, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO user
            (username,
            email,
            password,
            role_id)
            VALUES 
            (?,?,?,3)`,
      [user.username, user.email, user.password],
    );
    return result.insertId;
  }

  async readByUsername(username: string) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT username, password
      FROM user
      WHERE username = ?
      `,
      [username],
    );
    return rows.length ? (rows[0] as UserType) : null;
  }
  async readRoleByUsername(payloadUsername: string) {
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT role_id
        FROM user
        WHERE username = ?
      `,
      [payloadUsername],
    );

    return rows[0].role_id as number;
  }
}

export default new userRepository();
