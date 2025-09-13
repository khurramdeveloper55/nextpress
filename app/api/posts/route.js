import Post from "@/models/postModel";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/getAuthUser";

export async function POST(req) {
  await dbConnect();
  try {
    const user = await getAuthUser(req, ["author", "admin"]);

    const reqBody = await req.json();
    const post = await Post.create({ ...reqBody, author: user.id });

    return NextResponse.json({ success: true, post }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 404 }
    );
  }
}

export async function GET(req) {
  await dbConnect();
  try {
    const user = await getAuthUser(req, ["author", "admin"]);
    let posts;
    if (user.role === "admin") {
      posts = await Post.find().populate("author", "name email role");
    } else if (user.role === "author") {
      posts = await Post.find({ author: user._id }).populate(
        "author",
        "name email role"
      );
    }
    return NextResponse.json(
      { success: true, results: posts.length, posts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 404 }
    );
  }
}
