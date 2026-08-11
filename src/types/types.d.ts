// src/index.ts 里的 `import "./style.css"` 需要它，否则开启
// noUncheckedSideEffectImports 时会报找不到模块
declare module "*.css"
