import { Elysia } from "elysia"
import ExampleService from "./service"

const ExampleController = new Elysia({
	name: "example.controller",
})
	.use(ExampleService)
	.get("/", async (ctx) => {
		const result = await ctx.services.getExampleById(1)
		if (!result)
			return ctx.status("No Content", {
				message: "No data found",
			})
		return result
	})
	.post(
		"/",
		async (ctx) => {
			const result = await ctx.services.postExample(ctx.body)
			if (!result)
				return ctx.status("Internal Server Error", {
					message: "Cannot create new data",
				})
			return result
		},
		{
			body: "body",
		}
	)

export default ExampleController
