import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import dbConnect from "./mongodb";
import { cookies } from "next/headers";

export async function getAuthUser(req, allowedRoles = []) {
  await dbConnect();
  let token;
  const authHeader = req.headers.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    const cookieStore = await cookies();
    token = cookieStore.get("token")?.value;
  }

  if (!token) {
    throw new Error("No token provided");
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    throw new Error("Invalid or expired token");
  }

  const user = await User.findById(decoded.id);

  if (!user) {
    throw new Error("User not found");
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    throw new Error("You are not authorized to access this resource");
  }

  return user;
}
