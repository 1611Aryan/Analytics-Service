import mongoose from "mongoose"
import logger from "../Logger/index.js"
import { MONGO_URI } from "./../Env.js"

const MongooseConfig = async () => {
  try {
    mongoose.set("strictQuery", false)
    await mongoose.connect(MONGO_URI)
    logger.info("MongoDB connected")
  } catch (err: any) {
    logger.error(new Error(err))
  }
}

export default MongooseConfig
