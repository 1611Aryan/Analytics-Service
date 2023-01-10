import { Request, Response } from "express"
import logger from "../Logger/index.js"
import User, { IUser } from "../Models/User.model.js"
import { userExists } from "./util.js"

const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: IUser = req.body
    if (await userExists(email))
      return res
        .status(400)
        .send({ message: "User Already Exists. Try Logging in" })

    await User.create({ name, email, password })
    return res.status(203).send({ message: "User Created" })
  } catch (err: any) {
    logger.error("signup", new Error(err))
    return res.status(500).send(err)
  }
}

export default signup
