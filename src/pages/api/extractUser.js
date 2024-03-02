import { connectToDatabase } from "@/util/mongodb";

// Extracts info from the logged in user to get activities, total annotations, etc
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    const username = req.body;

    // Annotation Count
    const annotationCount = await db
      .collection("annotations")
      .find({ username: username })
      .count();

    // Latest Annotation
    const lastAnnotation = await db
      .collection("annotations")
      .find({ username: username })
      .sort({ _id: -1 })
      .limit(1)
      .toArray();

    let lastAnnotationDate = "N/A";
    if (lastAnnotation.length > 0) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const jsDate = new Date(lastAnnotation[0].date);
      lastAnnotationDate = jsDate.toLocaleDateString("en-US", options);
    }

    // User Activities
    const user = await db
      .collection("users")
      .find({ username: username })
      .limit(1)
      .toArray();
    const userActivities = user[0].activities;

    res.json({
      lastAnnotationDate,
      annotationCount,
      userActivities,
    });
  }
};

export default handler;
