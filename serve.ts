import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";
import { ServerContext } from "$fresh/server.ts";
console.log("serve.ts running");
const ctx = await ServerContext.fromManifest(manifest, {
    ...config,
    dev: false,
});
export default {
    fetch: ctx.handler(),
};
