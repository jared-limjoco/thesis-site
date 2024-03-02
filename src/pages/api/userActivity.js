import { connectToDatabase } from "@/util/mongodb";

// Inserts a user activity
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    const { username, activity, tag, date } = req.body;
    // Insert Activity in user
    console.log("Insert user activity");
    await db
      .collection("users")
      .update(
        { username: username },
        { $push: { activities: { activity, date, tag } } }
      );

    res.send(200);
  }
};

export default handler;
