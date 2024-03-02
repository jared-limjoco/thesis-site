import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/util/mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log("Posting Registration");
    const { db } = await connectToDatabase();

    // Required fields are done on the front end
    const {
      username,
      password,
      email,
      city,
      age,
      mobilityAids,
      commuteFrequency,
      referred,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    if ((await db.collection("users").countDocuments({ email })) > 0) {
      console.log("Duplicate email in registration");
      res.status(400).send({ message: "The email has already been used." });
    } else if (
      (await db.collection("users").countDocuments({ username })) > 0
    ) {
      console.log("Duplicate username in registration");
      res.status(403).send({ message: "The username has already been used." });
    } else {
      console.log("Creating new user in db");
      const dateRegistered = new Date();
      const totalAnnotations = 0;
      const activities = [
        {
          activity: "Registered to Atlas",
          date: dateRegistered,
          tag: "register",
        },
      ];
      await db
        .collection("users")
        .insertOne({
          username,
          hashedPassword,
          email,
          city,
          age,
          mobilityAids,
          commuteFrequency,
          activities,
          totalAnnotations,
          referred,
        })
        .then(({ ops }) => ops[0]);
      res.status(201).send("Done");
    }
  }
};

export default handler;
