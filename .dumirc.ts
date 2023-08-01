import { defineConfig } from "dumi"

export default defineConfig({
  base: "/react-jwchat/",
  publicPath: "/react-jwchat/",
  outputPath: "docs-dist",
  themeConfig: {
    name: "RC",
    logo: "/logo.png",
  },
  favicons: ["/logo.png"],
})
