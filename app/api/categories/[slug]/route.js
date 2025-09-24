import Category from "@/models/categoryModel";
import Post from "@/models/postModel";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/getAuthUser";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { slug } = await params;
    const category = await Category.findOne({ slug });
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }
    const posts = await Post.find({ category: category._id })
      .populate("author", "name role")
      .populate("category", "name description slug");
    return NextResponse.json(
      { success: true, results: posts.length, posts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 404 }
    );
  }
}

export async function PATCH(req, { params }) {
  await dbConnect();
  try {
    await getAuthUser(req, ["admin"]);
    const { slug } = await params;
    const reqBody = await req.json();
    const category = await Category.findOneAndUpdate({ slug }, reqBody, {
      new: true,
    });

    return NextResponse.json({ success: true, category }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 404 }
    );
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    await getAuthUser(req, ["admin"]);
    const { slug } = await params;
    await Category.findOneAndDelete({ slug });
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 404 }
    );
  }
}
