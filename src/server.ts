import { PORT } from "./Env.js"
import ExpressConfig from "./Express/express.config.js"
import logger from "./Logger/index.js"
import MongooseConfig from "./Mongoose/mongoose.config.js"
import publicRouter from "./Routes/public.route.js"

const app = ExpressConfig()

await MongooseConfig()

app.use("/", publicRouter)

app.listen(PORT, () => logger.info(`Server running on port: ${PORT}`))
