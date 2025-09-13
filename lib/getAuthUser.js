import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import dbConnect from "./mongodb";

export async function getAuthUser(req, allowedRoles = []) {
  await dbConnect();
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Error("No token provided");
  }

  const token = authHeader.split(" ")[1];

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
