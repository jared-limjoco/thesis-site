import { connectToDatabase } from "@/util/mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    console.log("post route");

    // Required fields are done on the front end
    const date = new Date();
    const {
      imageID,
      username,
      accessibilityRating,
      pavementType,
      selectedObjectsID,
      newObjects,
    } = req.body;

    await db
      .collection("annotations")
      .insertOne({
        date,
        username,
        imageID,
        accessibilityRating,
        pavementType,
        selectedObjectsID,
        newObjects,
      })
      .then(({ ops }) => {
        console.log(
          `User: ${username} submitted annotation of ImageID: ${imageID} at ${date} - ${accessibilityRating} ${pavementType} ${selectedObjectsID} ${newObjects} `
        );
        res
          .status(200)
          .send(
            `User: ${username} submitted annotation of ImageID: ${imageID} at ${date}`
          );
      });
  }
};

export default handler;
