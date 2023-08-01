---
nav:
  title: Components
  path: /components
---

## Demo

<code src="../../demo/DemoContactItem.tsx"></code>

## API

### Properties

| key     | type    | desc                                                       | required |
| ------- | ------- | ---------------------------------------------------------- | -------- |
| contact | Contact | 联系人信息                                                 | true     |
| border  | boolean | 时候显示列表项底部分隔线，在 ContactList 组件中默认为 true | false    |
| style   | style   | 容器样式                                                   | false    |

### Events

| key     | type | desc                                 | required |
| ------- | ---- | ------------------------------------ | -------- |
| onClick | func | 点击回调，回调参数包含当前联系人信息 | false    |

## Contact

联系人信息对象

示例：

```typescript
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
