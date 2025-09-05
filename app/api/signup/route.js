import dbConnect from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  try {
    const reqBody = await req.json();
    const user = await User.create(reqBody);

    const newUser = user.toObject();
    delete newUser.password;

    return NextResponse.json({ success: true, newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 403 }
    );
  }
}
