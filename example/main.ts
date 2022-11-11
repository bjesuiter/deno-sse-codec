import {} from "@mod";
import { log } from "@deps/std_log.ts";
import { VERSION } from "@version";

try {
  log.info(`Module Version (version.ts): ${VERSION}`);
} catch (error) {
  console.error(error);
  Deno.exit();
}
