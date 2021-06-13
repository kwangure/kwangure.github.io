import preprocess from 'svelte-preprocess'
import { preprocessConfig } from "@kwangure/strawberry/config/index.cjs";

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess(preprocessConfig),
	kit: {
		target: 'body'
	}
};
