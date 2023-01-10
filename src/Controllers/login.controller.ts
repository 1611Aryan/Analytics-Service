import { Request, Response } from "express"
import logger from "../Logger/index.js"
import { IUser } from "../Models/User.model.js"
import { userExists } from "./util.js"

const login = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUser = req.body
    const user = await userExists(email)
    if (!user || !(await user.validatePassword(password)))
      return res.status(401).send({ message: "Incorrect Email/Password" })

    return res.status(200).send({ message: "Login Successfull" })
  } catch (err: any) {
    logger.error("login", new Error(err))
    return res.status(500).send({ err })
  }
}

export default login
