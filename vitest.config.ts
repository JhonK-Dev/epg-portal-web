import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'happy-dom',
		globals: true,
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		exclude: ['node_modules', 'dist', '.astro'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			include: ['src/lib/**', 'src/hooks/**', 'src/components/ui/**'],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'astro:env/server': path.resolve(
				__dirname,
				'./src/test/mocks/astro-env-server.ts'
			),
		},
	},
});
