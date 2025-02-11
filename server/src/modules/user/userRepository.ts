import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";

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
            (?,?,?,1)`,
      [user.username, user.email, user.password],
    );
    return result.insertId;
  }
}

export default new userRepository();
