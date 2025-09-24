import Category from "@/models/categoryModel";
import Post from "@/models/postModel";
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
    const categories = await Category.find();

    const categoriesWithCounts = await Promise.all(
      categories.map(async (cat) => {
        const postCount = await Post.countDocuments({
          category: cat._id,
          status: "publish",
        });
        return { ...cat.toObject(), postCount };
      })
    );

    return NextResponse.json(
      {
        success: true,
        results: categories.length,
        categories: categoriesWithCounts,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 404 }
    );
  }
}
