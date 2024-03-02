import dbMiddleware from "./db";
import nextConnect from "next-connect";

const middleware = nextConnect();
middleware.use(dbMiddleware);

export default middleware;
