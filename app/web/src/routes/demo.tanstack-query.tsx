import type { ServerType } from "@api"
import { treaty } from "@elysiajs/eden"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/demo/tanstack-query")({
	component: TanStackQueryDemo,
})

const client = treaty<ServerType>("localhost:3001")

function TanStackQueryDemo() {
	const { data } = useQuery({
		queryKey: ["test"],
		queryFn: () => client.api.example.get(),
	})

	return <div className="p-4">{data?.data}</div>
}
