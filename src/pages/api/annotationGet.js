import { connectToDatabase } from "@/util/mongodb";

const handler = async (req, res) => {
 if (req.method === "POST") {
    const { db } = await connectToDatabase();
    const annotationTotalCount = req.body;

    // First, find all imageIDs that are already annotated
    const annotatedImageIDs = await db.collection("annotations").distinct("imageID");

    // Then, find images that are not annotated yet
    const imgRecords = await db
      .collection("Image")
      .aggregate([
        // Exclude images that are already annotated
        { $match: { imageID: { $nin: annotatedImageIDs } } },
        // Add a random field for sorting
        { $addFields: { rand: { $rand: {} } } },
        // Sort by the random field
        { $sort: { rand: 1 } },
        // Limit the results to annotationTotalCount
        { $limit: annotationTotalCount }
      ])
      .toArray();

    res.json({
      imgRecords: imgRecords,
    });
 }
};

export default handler;
