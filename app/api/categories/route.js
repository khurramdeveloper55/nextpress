import Category from "@/models/categoryModel";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/getAuthUser";

export async function POST(req) {
  await dbConnect();
  try {
    await getAuthUser(req, ["admin"]);
    const reqBody = await req.json();
    const category = await Category.create(reqBody);
    return NextResponse.json({ success: true, category }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 404 }
    );
  }
}

export async function GET(req) {
  await dbConnect();

  try {
    await getAuthUser(req, ["admin", "author"]);

    const categories = await Category.find();

    return NextResponse.json(
      { success: true, results: categories.length, categories },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 404 }
    );
  }
}
