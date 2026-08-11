import path from "path"

import tailwindcss from "@tailwindcss/postcss"
import { defineConfig } from "dumi"

export default defineConfig({
  alias: { "@": path.join(__dirname, "src") },
  extraPostCSSPlugins: [tailwindcss() as any],
  base: "/react-jwchat/",
  publicPath: "/react-jwchat/",
  outputPath: "docs-dist",
  themeConfig: {
    name: "RC",
    logo: "/react-jwchat/logo.png",
  },
  favicons: ["/react-jwchat/logo.png"],
})
