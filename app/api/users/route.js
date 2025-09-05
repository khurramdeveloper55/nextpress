import dbConnect from "@/lib/mongodb";
import User from "@/models/userModel";

export async function POST(req) {
  await dbConnect();
  try {
    const { name, email } = await req.json();
    const user = new User({ name, email });
    await user.save();
    return Response.json({ success: true, user }, { status: 201 });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function GET() {
  await dbConnect();
  try {
    const users = await User.find({});
    return Response.json({ success: true, users }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
