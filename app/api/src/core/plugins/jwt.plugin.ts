import bearer from "@elysiajs/bearer"
import jwt from "@elysiajs/jwt"
import { Elysia, t } from "elysia"
import { envPlugin } from "./env.plugin"

const jwtSchema = t.Object({
	// README: Append custom properties here
	userId: t.String(),
})

export const jwtPlugin = new Elysia({
	name: "jwt-plugin",
})
	.use(envPlugin)
	.use(({ decorator }) => {
		return jwt({
			name: "jwt",
			secret: decorator.env.JWT_SECRET,
			schema: jwtSchema,
		})
	})
	.use(bearer())
	.onBeforeHandle((ctx) => {
		if (!ctx.bearer)
			return ctx.status(401, {
				code: "Unauthorized",
				message: "No token provided",
			})
	})
