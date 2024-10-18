import createServer from "./framework/express.js";
import { dbConnect } from "./config/dbConnect.js";
import { configDotenv } from "dotenv";
console.log('hello');


configDotenv();

const app = createServer();

dbConnect();

export default app;
