import Category from "@/models/categoryModel";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { id } = await params;
    const category = await Category.findById(id);
    return NextResponse.json({ success: true, category }, { status: 200 });
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
    const { id } = await params;
    const reqBody = await req.json();
    const category = await Category.findByIdAndUpdate(id, reqBody, {
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
    const { id } = await params;
    await Category.findByIdAndDelete(id);
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 404 }
    );
  }
}
