import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import nodeResolve from "@rollup/plugin-node-resolve";

import sveltePreprocess from "svelte-preprocess";
import svelte from "rollup-plugin-svelte";

/** @type {import("rollup").RollupOptions[] } */
const config = [
	{
		input: "src/content.ts",
		output: {
			format: "iife",
			dir: "build",
		},
		plugins: [
			typescript(),
		]
	},
	{
		input: "src/background.ts",
		output: {
			format: "iife",
			dir: "build",
		},
		plugins: [
			typescript(),
		]
	},
	{
		input: "src/popup/popup.ts",
		output: {
			name: "popup",
			format: "iife",
			dir: "build/popup",
		},
		plugins: [
			typescript(),
			css({ output: "build/popup/bundle.css" }),
			nodeResolve({ browser: true }),
			svelte({
				preprocess: sveltePreprocess()
			}),
		]
	}
];

export default config;
