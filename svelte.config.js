import adapter from "@sveltejs/adapter-static";
import { strawberryPreproces } from "@kwangure/strawberry/config/index.js";

/** @type {import("@sveltejs/kit").Config} */
export default {
	preprocess: strawberryPreproces,
	kit: {
		adapter: adapter(),
		target: "body",
	},
};
