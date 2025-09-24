import Post from "@/models/postModel";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 0;
    const posts = await Post.find({ status: "publish" })
      .populate("author", "name")
      .populate("category", "name slug")
      .sort({ createdAt: -1 })
      .limit(limit);

    return NextResponse.json(
      { success: true, results: posts.length, posts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
