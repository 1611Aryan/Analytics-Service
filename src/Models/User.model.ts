import bcrypt from "bcrypt"
import { Model, model, Schema } from "mongoose"
import { ISite } from "./Site.Model.js"

export type IUser = {
  name: string
  email: string
  password: string
  sites: ISite["siteId"][]
}

type IUserMethods = {
  validatePassword: (data: string) => Promise<boolean>
}

type UserModel = Model<IUser, {}, IUserMethods>

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sites: {
    type: [String],
  },
})

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.method("validatePassword", async function (data: string) {
  return bcrypt.compare(data, this.password)
})

const User = model<IUser, UserModel>("User", userSchema)

export default User
