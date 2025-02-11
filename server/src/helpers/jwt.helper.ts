import jwt from "jsonwebtoken";
import type { UserType } from "../lib/definitions";

type PayloadType = {
  username: string;
};

export const JwtEncode = async (payload: PayloadType) => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};
