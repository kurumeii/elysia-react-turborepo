import type { InferInsertModel, InferSelectModel } from "drizzle-orm"
import { pgTable } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-typebox"

export const exampleTable = pgTable("example", (builder) => ({
	id: builder.integer("id").primaryKey().generatedByDefaultAsIdentity(),
	example_name: builder.varchar("name", { length: 150 }).notNull(),
	created_at: builder.timestamp("created_at").defaultNow(),
	updated_at: builder.timestamp("updated_at").defaultNow(),
}))

export type Example = InferSelectModel<typeof exampleTable>
export type Example_new = InferInsertModel<typeof exampleTable>

// README: This is for validation schema
export const exampleSchemas = {
	insert: createInsertSchema(exampleTable),
}
