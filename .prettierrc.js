module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-packagejson"),
  ],
  printWidth: 80,
  proseWrap: "never",
  singleQuote: false,
  trailingComma: "all",
  semi: false,
  jsxBracketSameLine: true,
  overrides: [
    {
      files: "*.md",
      options: {
        proseWrap: "preserve",
      },
    },
  ],
};
