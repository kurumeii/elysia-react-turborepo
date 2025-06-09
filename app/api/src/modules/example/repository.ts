import { dbPlugin } from "@/core/plugins/db.plugin"
import { eq } from "drizzle-orm"
import { Elysia, t } from "elysia"
import {
	type Example,
	type Example_new,
	exampleSchemas,
	exampleTable,
} from "./schema"

const ExampleRepository = new Elysia({
	name: "example.repository",
})
	.use(dbPlugin)
	.model({
		param: t.Number(),
		body: t.Omit(exampleSchemas.insert, ["id"]),
	})
	.derive({ as: "scoped" }, ({ db }) => ({
		repo: {
			//README: Add new repository logic here
			async findById(input: Example["id"]) {
				return db
					.select()
					.from(exampleTable)
					.where(eq(exampleTable.id, input))
					.execute()
			},
			async create(input: Example_new) {
				return db.transaction(async (trx) => {
					await trx.insert(exampleTable).values(input).execute()
					return {
						message: "ok",
					}
				})
			},
		},
	}))

export default ExampleRepository
