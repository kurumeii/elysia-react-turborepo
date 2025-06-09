import { bearer } from "@elysiajs/bearer"
import { cors } from "@elysiajs/cors"
import { staticPlugin } from "@elysiajs/static"
import { swagger } from "@elysiajs/swagger"
import { Elysia } from "elysia"
import { pluginGracefulServer } from "graceful-server-elysia"
import { dbPlugin } from "./db.plugin"
import { envPlugin } from "./env.plugin"
import { jwtPlugin } from "./jwt.plugin"
import loggerPlugin from "./logger.plugin"

export default new Elysia({ name: "plugins" })
	.use(
		swagger({
			path: "/swagger",
			autoDarkMode: true,
			swaggerOptions: {
				syntaxHighlight: {
					theme: "tomorrow-night",
				},
			},
		})
	)
	.use(envPlugin)
	.use(pluginGracefulServer())
	.use(loggerPlugin)
	.use(bearer())
	.use(cors())
	.use(staticPlugin())
	.use(jwtPlugin)
	.use(dbPlugin)
