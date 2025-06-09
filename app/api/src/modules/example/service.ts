import { Elysia } from "elysia"
import ExampleRepository from "./repository"
import type { Example, Example_new } from "./schema"

const ExampleService = new Elysia({
	name: "example.service",
})
	.use(ExampleRepository)
	.derive({ as: "scoped" }, (ctx) => ({
		services: {
			async getExampleById(input: Example["id"]) {
				if (!ctx.repo) return null
				return ctx.repo.findById(input)
			},
			async postExample(input: Example_new) {
				if (!ctx.repo) return null
				return ctx.repo.create(input)
			},
		},
	}))

export default ExampleService
