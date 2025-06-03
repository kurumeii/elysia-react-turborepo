import tailwindcss from "@tailwindcss/vite"
import viteReact from "@vitejs/plugin-react"
import { type UserConfig, defineConfig } from "vite"

import { resolve } from "node:path"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

export default defineConfig({
	plugins: [
		TanStackRouterVite({ autoCodeSplitting: true }),
		viteReact(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	server: {
		proxy: {
			"/api/v1": {
				target: "http://localhost:3001",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
}) satisfies UserConfig
