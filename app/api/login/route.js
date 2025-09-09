import dbConnect from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "Please provide email and password" },
      { status: 400 }
    );
  }
  const user = await User.findOne({
    email,
  }).select("+password");
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  if (!user || !(await user.comparePassword(password))) {
    return NextResponse.json(
      { success: false, message: "Inorrect Email Or Password" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { success: true, token, message: "User Successfully Logged In" },
    { status: 200 }
  );
}
