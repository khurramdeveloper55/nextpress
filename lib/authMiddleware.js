import jwt from "jsonwebtoken";
import { promisify } from "util";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function middleware(req) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return NextResponse({
      success: false,
      message: "Invalid Token Please Try To Login",
    });
  }

  const decoded = promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return NextResponse({
      success: false,
      message: "User belonging to this token does not exist",
    });
  }

  req.user = currentUser;
}
