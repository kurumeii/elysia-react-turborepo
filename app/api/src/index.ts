import cors from "@elysiajs/cors"
import Elysia from "elysia"

const app = new Elysia({
	prefix: "/api/v1",
})
	.onStart(({ server }) => {
		console.log(`🦊 Elysia is running at ${server?.hostname}:${server?.port}`)
	})
	.use(cors())
	.get("/", () => "Hello from backend API!")
	.listen(3001)

export type ServerType = typeof app
