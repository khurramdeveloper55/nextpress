import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, email } = req.body;
      const user = new User({ name, email });
      await user.save();
      res.status(201).json({ success: true, user });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const users = await User.find({});
      res.status(200).json({ success: true, users });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
