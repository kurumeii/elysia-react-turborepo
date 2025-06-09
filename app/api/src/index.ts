import { Elysia } from "elysia"

export const app = new Elysia()
	.use(import("@plugins"))
	.group("/api", (a) =>
		// README: Add new module here
		a.use(import("@modules/example"))
	)
	.listen(Number(Bun.env.PORT), (server) =>
		console.log(`Server is running on ${server.hostname}:${server.port}`)
	)

export type ServerType = typeof app
