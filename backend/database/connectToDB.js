import mongoose from "mongoose";

export default async function connectTODB(){
      let db_response = await mongoose.connect(process.env.MONGO_URL)
      console.log("successfully connected to database")
}