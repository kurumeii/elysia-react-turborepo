import { t, Elysia } from "elysia"
import { env } from "@yolk-oss/elysia-env"

export const envPlugin = new Elysia({
	name: "plugin.env",
}).use(
	env({
		NODE_ENV: t.Union(
			[t.Literal("development"), t.Literal("production"), t.Literal("test")],
			{
				default: "development",
			}
		),
		PORT: t.Number({ default: 3001 }),
		DATABASE_URL: t.Required(t.String(), {
			error: "Missing env `Database URL`",
		}),
		JWT_SECRET: t.Required(t.String(), {
			error: "Missing env `JWT Secret`",
		}),
	})
)
