import { connectToDatabase } from "@/util/mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    const annotationTotalCount = req.body;

    const imgRecords = await db
      .collection("Image")
      .aggregate([{ $sample: { size: annotationTotalCount } }])
      .toArray();

    res.json({
      imgRecords: imgRecords,
    });
  }
};

export default handler;
