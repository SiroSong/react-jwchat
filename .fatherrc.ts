import path from "path"

import { defineConfig } from "father"

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  alias: { "@": path.join(__dirname, "src") },
  esm: { output: "dist" },
})
