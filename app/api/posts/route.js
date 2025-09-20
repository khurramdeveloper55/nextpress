import Post from "@/models/postModel";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/getAuthUser";
import mongoose from "mongoose";

export async function POST(req) {
  await dbConnect();
  try {
    const user = await getAuthUser(req, ["author", "admin"]);

    const reqBody = await req.json();

    if (
      !reqBody.category ||
      !mongoose.Types.ObjectId.isValid(reqBody.category)
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing category ID" },
        { status: 400 }
      );
    }

    if (!["draft", "publish"].includes(reqBody.status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status value" },
        { status: 400 }
      );
    }

    const post = await Post.create({
      ...reqBody,
      author: user.id,
      category: new mongoose.Types.ObjectId(reqBody.category),
      status: reqBody.status || "draft",
    });

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
