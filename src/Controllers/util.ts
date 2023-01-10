import logger from "../Logger/index.js"
import User, { IUser } from "../Models/User.model.js"

export const userExists = async (email: IUser["email"]) => {
  try {
    const a = User.findOne({ email })
    if (!a) return null
    return a
  } catch (err: any) {
    logger.error("userExists", new Error(err))
    throw err
  }
}
