import { logger } from "@bogeychan/elysia-logger"
import { Elysia } from "elysia"

export default new Elysia({
	name: "plugin.logger",
}).use(logger())
