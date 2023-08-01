import { defineConfig } from "dumi"

export default defineConfig({
  outputPath: "docs-dist",
  themeConfig: {
    name: "RC",
    logo: "/logo.png",
  },
  favicons: ["/logo.png"],
  // resolve: {
  //   docDirs: ["home"],
  // },
})
