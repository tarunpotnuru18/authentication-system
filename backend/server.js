import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./routes/router.js";
import connectTODB from "./database/connectToDB.js";
let app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
connectTODB()
app.use("/",router)
app.listen(process.env.PORT, () => {
  console.log("server started at " + process.env.PORT);
});
