import Post from "@/models/postModel";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/getAuthUser";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { slug } = await params;
    const post = await Post.findOne({ slug })
      .populate("author", "name email role")
      .populate("category", "name slug");
    return NextResponse.json({ success: true, post }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 404 }
    );
  }
}

export async function PATCH(req, { params }) {
  await dbConnect();
  try {
    const user = await getAuthUser(req, ["admin", "author"]);
    const { slug } = await params;
    const body = await req.json();
    const post = await Post.findOne({ slug });
    if (!post) {
      throw new Error("Post not found");
    }
    if (
      user.role === "author" &&
      post.author.toString() !== user._id.toString()
    ) {
      throw new Error("Not authorized to update this post");
    }
    const updatePost = await Post.findOneAndUpdate({ slug }, body, {
      new: true,
    });
    return NextResponse.json({ success: true, updatePost }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 404 }
    );
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    const user = await getAuthUser(req, ["admin", "author"]);
    const { slug } = await params;
    const post = await Post.findOneAndDelete({ slug });
    if (!post) {
      throw new Error("Post not found");
    }
    if (
      user.role === "author" &&
      post.author.toString() !== user._id.toString()
    ) {
      throw new Error("Not authorized to delete this post");
    }
    const deletePost = await Post.findOneAndDelete({ slug });
    if (!deletePost) {
      return NextResponse.json(
        { success: false, message: "No post found with that ID!" },
        { status: 404 }
      );
    }
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 404 }
    );
  }
}
