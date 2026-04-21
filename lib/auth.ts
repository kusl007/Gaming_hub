import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export type AuthUserPayload = {
  id: string;
  username: string;
  email: string;
};

const getJwtSecret = () =>
  process.env.JWT_SECRET || "fallback_secret_for_development_only";

export const signAuthToken = (payload: AuthUserPayload) =>
  jwt.sign(payload, getJwtSecret(), { expiresIn: "7d" });

export const getAuthUserFromCookies = async (): Promise<AuthUserPayload | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, getJwtSecret()) as AuthUserPayload;
  } catch {
    return null;
  }
};
