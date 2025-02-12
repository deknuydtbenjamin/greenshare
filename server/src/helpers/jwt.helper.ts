import jwt from "jsonwebtoken";
import type { PayloadType } from "../lib/definitions";

export const JwtEncode = async (payload: PayloadType) => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};
