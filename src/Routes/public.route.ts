import { Router } from "express"
import login from "../Controllers/login.controller.js"
import signup from "../Controllers/signup.controller.js"
import {
  getSiteView,
  siteViewIncrement,
} from "../Controllers/site.controller.js"

const publicRouter = Router()

publicRouter.post("/signup", signup)

publicRouter.post("/", login)

publicRouter.post("/increment", siteViewIncrement)

publicRouter.post("/view", getSiteView)

export default publicRouter
