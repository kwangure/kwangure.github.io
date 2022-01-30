import adapter from "@sveltejs/adapter-static";
import { strawberry } from "@kwangure/strawberry/build/vite-plugin-strawberry";

/** @type {import("@sveltejs/kit").Config} */
export default {
    kit: {
        adapter: adapter(),
        target: "body",
        vite: {
            plugins: [
                strawberry(),
            ],
        },
    },
};
