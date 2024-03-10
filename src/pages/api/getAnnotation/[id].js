import { connectToDatabase } from "@/util/mongodb";
const { ObjectID } = require("mongodb");

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();

    const id = req.query.id;

    const annotationRecord = await db
      .collection("annotations")
      .findOne({ _id: ObjectID(id) });

    const imageID = annotationRecord.imageID;

    const imageRecord = await db
      .collection("Image")
      .findOne({ _id: ObjectID(imageID) });

    const data = {
      imageID: imageID,
      city: imageRecord.city,
      url: imageRecord.url,
      selectedObjects: annotationRecord.selectedObjectsID,
      detectedObjects: imageRecord.annotationList,
      newObjects: annotationRecord.newObjects,
      accessibilityRating: annotationRecord.accessibilityRating,
      pavementType: annotationRecord.pavementType,
      username: annotationRecord.username,
      date: annotationRecord.date,
    };
    // console.log("0----------------------");
    // console.log(annotationRecord);
    // console.log(data);
    // console.log("0----------------------");

    res.json(data);
  }
};

export default handler;
