import { build, emptyDir } from "https://deno.land/x/dnt@0.23.0/mod.ts";
import { VERSION } from "../version.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  test: false,
  package: {
    // package.json properties
    name: "@codemonument/sse-codec",
    version: VERSION,
    description:
      "A module which provides encoding & decoding functionality for SSE Events (Server Sent Events), as well as some types. Cross-Compiled by deno's dnt module. Also available at https://deno.land/x/sse_codec .",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/codemonument/deno-sse-codec.git",
    },
    bugs: {
      url: "https://github.com/codemonument/deno-sse-codec/issues",
    },
  },
});

// post build steps
await Deno.copyFile("LICENSE", "npm/LICENSE");
await Deno.copyFile("Readme.md", "npm/Readme.md");
