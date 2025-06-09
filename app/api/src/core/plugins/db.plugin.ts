import { drizzle } from "drizzle-orm/bun-sql"
import { Elysia } from "elysia"
import { envPlugin } from "./env.plugin"
import { SQL } from "bun"

export const dbPlugin = new Elysia({
	name: "plugin.db",
})
	.use(envPlugin)
	.decorate(({ env }) => ({
		db: drizzle({
			client: new SQL(env.DATABASE_URL),
			casing: "snake_case",
		}),
	}))
