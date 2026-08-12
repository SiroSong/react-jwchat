---
title: 主题定制
nav:
  title: 主题定制
  path: /theme
  order: 1
---

# 主题定制

组件的所有颜色都由 CSS 变量提供，覆盖同名变量即可换肤。

**不需要在你的项目里安装 tailwindcss**：`react-jwchat/style.css` 是发布前预编译好的普通 CSS（含 `:root` 变量 + 静态 class），tailwindcss 只是本库的构建期依赖。换肤走的是浏览器原生 CSS 级联，与你用什么框架、什么打包器无关。

## Demo

<code src="../demo/DemoTheme.tsx"></code>

## 用法

### 全局换肤

在你自己的 CSS 里覆盖即可：

```css
@import "react-jwchat/style.css";

:root {
  --color-jw-primary: #7c3aed;
  --color-jw-primary-active: #6d28d9;
  --color-jw-bubble: #ddd6fe;
}
```

库的变量定义在 `@layer theme` 里，而**无 layer 的样式优先级永远高于 layered 样式**，所以上面这段无论写在 import 之前或之后都生效。

### 局部换肤 / 多主题共存

变量会继承，挂在任意祖先元素上即可，同一页面可以有多套主题：

```tsx | pure
<div className="chat-purple">
  <Chat ... />
</div>
<div className="chat-blue">
  <Chat ... />
</div>
```

```css
.chat-purple {
  --color-jw-primary: #7c3aed;
}
.chat-blue {
  --color-jw-primary: #2563eb;
}
```

### 最稳的写法（内联样式）

如果你用 CSS Modules / styled-components，或者打包顺序不可控，直接写内联样式，优先级必胜：

```tsx | pure
<div style={{ "--color-jw-primary": "#7c3aed" } as React.CSSProperties}>
  <Chat ... />
</div>
```

### 深色模式

库本身不内置深色主题，覆盖变量即可：

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-jw-surface: #1f1f1f;
    --color-jw-surface-muted: #2a2a2a;
    --color-jw-border: #333;
    --color-jw-border-light: #333;
    --color-jw-border-strong: #555;
    --color-jw-text: #eee;
    --color-jw-text-secondary: #bbb;
    --color-jw-text-tertiary: #888;
  }
}
```

## 变量清单

| 变量                            | 默认值             | 作用                                         |
| ------------------------------- | ------------------ | -------------------------------------------- |
| `--color-jw-primary`            | `#2ba245`          | 主色：发送按钮、工具栏图标 hover             |
| `--color-jw-primary-active`     | `#1aad19`          | 主色按下态                                   |
| `--color-jw-primary-foreground` | `#fff`             | 主色上的文字（换浅色主色时记得一起改）       |
| `--color-jw-bubble`             | `#91ed61`          | 消息气泡背景（含尖角）                       |
| `--color-jw-surface`            | `#fff`             | 容器 / 列表 / 弹层背景                       |
| `--color-jw-surface-muted`      | `#f1f1f1`          | 次级背景：加载更多按钮、表情 hover、头像占位 |
| `--color-jw-disabled`           | `#ddd`             | 发送按钮禁用态背景                           |
| `--color-jw-border`             | `rgb(228 228 228)` | 主要分割线：消息区上下边框、联系人分割线     |
| `--color-jw-border-light`       | `#f1f1f1`          | 聊天容器外边框                               |
| `--color-jw-border-strong`      | `#aaa`             | 表情弹层边框、滚动条滑块                     |
| `--color-jw-text`               | `#333`             | 主文字：昵称、消息内容                       |
| `--color-jw-text-secondary`     | `#666`             | 次文字：联系人摘要、工具栏图标               |
| `--color-jw-text-tertiary`      | `#999`             | 弱文字：时间、描述、placeholder              |

> 若同时在自己项目里用 Tailwind v4，本库产物会向 `:root` 写入 `--spacing`、`--color-white` 等几个 Tailwind 默认 token（值为官方默认）。改过这些 token 的话，注意让自己的样式表在库样式之后加载。
