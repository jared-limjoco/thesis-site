import { connectToDatabase } from "@/util/mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    const annotationTotalCount = req.body;

    const imgRecords = await db
      .collection("Image")
      .aggregate([
        { $addFields: { rand: { $rand: {} } } },
        { $sort: { rand: 1 } },
        { $limit: annotationTotalCount }
      ])
      .toArray();

    res.json({
      imgRecords: imgRecords,
    });
  }
};

export default handler;
