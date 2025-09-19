import dbConnect from "@/lib/mongodb";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

export async function GET() {
  await dbConnect();
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token not found" },
        { status: 401 }
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired token" },
        { status: 401 }
      );
    }
    const user = await User.findById(decoded.id);
    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 404 }
    );
  }
}
