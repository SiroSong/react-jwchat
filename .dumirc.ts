import { defineConfig } from "dumi"

export default defineConfig({
  base: "/react-jwchat/",
  publicPath: "/react-jwchat/",
  outputPath: "docs-dist",
  themeConfig: {
    name: "RC",
    logo: "/react-jwchat/logo.png",
  },
  favicons: ["/react-jwchat/logo.png"],
})
