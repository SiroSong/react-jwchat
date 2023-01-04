# react-jwchat

![npm type definitions](https://img.shields.io/npm/types/react-jwchat?style=for-the-badge)
![npm](https://img.shields.io/npm/v/react-jwchat?style=for-the-badge&color=yellowgreen)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-jwchat?color=success&style=for-the-badge)
![npm](https://img.shields.io/npm/dw/react-jwchat?style=for-the-badge&color=yellow)
![NPM](https://img.shields.io/npm/l/react-jwchat?color=orange&style=for-the-badge)

## 介绍

react-jwchat 是一个简单的 web 聊天组件。

主要作用是为快速实现在线聊天功能的前端页面。

主要组件（暂时）包含聊天组件、联系人列表组件、单个联系人组件。

***如果你也喜欢开源，如果你也喜欢这个项目请留下你的 Star 🌟，你们的 🌟 是对作者最大的鼓励，或者留下你的代码我们一起让他变得更好~~~***

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5af08366dd6b4e96a27af39387d2ca41~tplv-k3u1fbpfcp-watermark.image)

## 安装

```bash
npm install react-jwchat
# or
yarn add react-jwchat
# or
pnpm install react-jwchat
```

## 组件

### Chat

---

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33c1266b60c448c6ba22c9dea0dc65a1~tplv-k3u1fbpfcp-watermark.image)

**使用：**

```jsx
<Chat
  contact={contact}
  me={my}
  chatList={msgList}
  onSend={(msg) => {}}
  onEarlier={() => {}}
  onImage={(files) => {}}
  style={{
    width: 600,
    height: 500,
  }}
/>
```

**属性：**

| key       | type    | desc                                           | required |
| --------- | ------- | ---------------------------------------------- | -------- |
| contact   | contact | 联系人信息                                     | true     |
| me        | contact | 本人信息                                       | true     |
| onSend    | func    | 发送消息时触发回调，回调参数为组装好的消息对象 | true     |
| onImage   | func    | 选择图片后触发回调，回调参数为图片列表         | true     |
| onEarlier | func    | 点击加载更多回调                               | false    |
| style     | style   | 容器样式（使用组件时需要指定 width、height）   | true     |

---

### **ContactItem**

---

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ff5d05c61e44312b1150f30a5e4a947~tplv-k3u1fbpfcp-watermark.image)

**使用：**

```jsx
<ContactItem contact={contact} onClick={(contact) => console.log(contact)} />
```

**属性：**

| key     | type    | desc                                                       | required |
| ------- | ------- | ---------------------------------------------------------- | -------- |
| contact | contact | 联系人信息                                                 | true     |
| onClick | func    | 点击回调，回调参数包含当前联系人信息                       | false    |
| border  | boolean | 时候显示列表项底部分隔线，在 ContactList 组件中默认为 true | false    |
| style   | style   | 容器样式                                                   | false    |

---

### **ContactList**

---

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ad25d9fc5f34ec9a3a3c17730e7c784~tplv-k3u1fbpfcp-watermark.image)

**使用：**

```jsx
<ContactList data={contactList} onSelect={(contact) => console.log(contact)} />
```

**属性：**

| key      | type      | desc                                          | required |
| -------- | --------- | --------------------------------------------- | -------- |
| data     | contact[] | 联系人列表，数组中的每个元素都为 contact 类型 | true     |
| onSelect | func      | 选中联系人触发回调，参数为当前选中联系人对象  | false    |
| style    | style     | 容器样式(**使用时需要指定高度**)              | false    |

---

## API

#### contact

联系人信息对象

---

示例：

```javascript
{
    id: 16,
    avatar: '//game.gtimg.cn/images/lol/act/img/champion/Jinx.png',
    nickname: '金克丝',
    message: '这是一条信息',
    date: '02-11',
    desc: '一行简短的简介',
}
```

说明：

| key      | desc                           |
| -------- | ------------------------------ |
| id       | 用户标示，需要唯一             |
| avatar   | 用户头像                       |
| nickname | 用户昵称                       |
| message  | 最近一条信息                   |
| date     | 信息更新时间                   |
| desc     | 用户简介(用于在聊天框头部显示) |

#### message

消息对象

---

示例：

> 当前信息为文字信息时，`message.type === 'text'`

```javascript
{
    _id: '75b5bde8f3b9ef7aa9b704492cb28baf',
    date: 1610016580,
    user: {
        id: 1234,
        avatar: '//game.gtimg.cn/images/lol/act/a20201103lmpwjl/icon-ht.png',
        nickname: 'sirosong',
        desc: '这是我的第一条信息',
    },
    message: { type: 'text', content: '敌我打野差距👎 ' },
},
```

> 当前信息为文字信息时，`message.type === 'image'`

```javascript
{
  _id: '75b5bde8f3b9ef7aa904492cb28baf',
  date: 1610016880,
  user: {
    id: 9527,
    avatar: '//game.gtimg.cn/images/lol/act/img/champion/Khazix.png',
    nickname: '卡兹克',
    desc: '这是我的第一条信息',
  },
  message: {
    type: 'image',
    content: '//game.gtimg.cn/images/lol/act/a20201103lmpwjl/icon-ht.png',
  },
},
```

说明：

| key     | desc              |
|---------|-------------------|
| \_id    | 每条信息的唯一标识，组件内自动生成 |
| date    | 消息产生时间            |
| user    | 当前消息发起人的信息        |
| message | 消息内容主体            |