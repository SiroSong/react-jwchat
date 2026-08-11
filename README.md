# react-jwchat

[![NPM version](https://img.shields.io/npm/v/react-jwchat.svg?style=flat)](https://npmjs.org/package/react-jwchat)
[![NPM downloads](http://img.shields.io/npm/dm/react-jwchat.svg?style=flat)](https://npmjs.org/package/react-jwchat)

![npm type definitions](https://img.shields.io/npm/types/react-jwchat?style=for-the-badge)
![npm](https://img.shields.io/npm/v/react-jwchat?style=for-the-badge&color=yellowgreen)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-jwchat?color=success&style=for-the-badge)
![npm](https://img.shields.io/npm/dw/react-jwchat?style=for-the-badge&color=yellow)
![NPM](https://img.shields.io/npm/l/react-jwchat?color=orange&style=for-the-badge)

react-jwchat 是一个简单的 web 聊天组件。react-jwchat is a simple web chat component.

主要作用是为快速实现在线聊天功能的前端页面。

主要组件（暂时）包含聊天组件、联系人列表组件、单个联系人组件。

**_如果你也喜欢开源，如果你也喜欢这个项目请留下你的 Star 🌟，你们的 🌟 是对作者最大的鼓励，或者留下你的代码我们一起让他变得更好~~~_**

![](https://files.catbox.moe/0xp47m.png)

## Usage

```bash
npm install react-jwchat
# or
yarn add react-jwchat
# or
pnpm install react-jwchat
```

```tsx
import { Chat, IMessage } from "react-jwchat"
// 若打包器不处理依赖内的 css import，手动引入：
// import "react-jwchat/style.css"

export default function App() {
  const [chatList, setChatList] = useState<IMessage[]>([])

  return (
    <Chat
      me={{ id: 1, nickname: "me", avatar: "..." }}
      contact={{ id: 2, nickname: "friend", avatar: "..." }}
      chatList={chatList}
      onSend={(msg) => setChatList([...chatList, msg])}
    />
  )
}
```

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# check your project for potential problems
$ pnpm run doctor
```

## LICENSE

MIT
