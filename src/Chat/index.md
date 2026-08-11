---
nav:
  title: Components
  path: /components
---

## Demo

<code src="../../demo/DemoChat.tsx"></code>

## API

### Properties

| key      | type      | desc                                         | required |
| -------- | --------- | -------------------------------------------- | -------- |
| contact  | Contact   | 联系人信息                                   | true     |
| me       | Contact   | 本人信息                                     | true     |
| chatList | Message[] | 消息列表                                     | false    |
| style    | style     | 容器样式，默认 `{ width: 600, height: 500 }` | false    |

### Events

| key       | type | desc                                           | required |
| --------- | ---- | ---------------------------------------------- | -------- |
| onSend    | func | 发送消息时触发回调，回调参数为组装好的消息对象 | true     |
| onImage   | func | 选择图片后触发回调，回调参数为 FileList        | false    |
| onEarlier | func | 点击加载更多回调                               | false    |

### Message

消息对象

示例：

> 当前信息为文字信息时，`message.type === 'text'`

```typescript
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

```typescript
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

| key     | desc                               |
| ------- | ---------------------------------- |
| \_id    | 每条信息的唯一标识，组件内自动生成 |
| date    | 消息产生时间                       |
| user    | 当前消息发起人的信息               |
| message | 消息内容主体                       |
