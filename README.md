# react-jwchat

## 介绍

react-jwchat是一个简单的web聊天组件。

## 安装

```bash
npm install react-jwchat
```

## 组件

#### Chat

***

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
| style     | style   | 容器样式（使用组件时需要指定width、height）    | true     |

#### ContactItem

***

**使用：**

```jsx
<ContactItem
    contact={contact}
    onClick={(contact) => console.log(contact)}
/>
```

**属性：**

| key     | type    | desc                                                    | required |
| ------- | ------- | ------------------------------------------------------- | -------- |
| contact | contact | 联系人信息                                              | true     |
| onClick | func    | 点击回调，回调参数包含当前联系人信息                    | false    |
| border  | boolean | 时候显示列表项底部分隔线，在ContactList组件中默认为true | false    |
| style   | style   | 容器样式                                                | false    |

#### ContactList

***

**使用：**

```jsx
<ContactList
  contactList={contactList}
  onSelect={(contact) => console.log(contact)}
/>
```

**属性：**

| key         | type      | desc                                         | required |
| ----------- | --------- | -------------------------------------------- | -------- |
| contactList | contact[] | 联系人列表，数组中的每个元素都为contact类型  | true     |
| onSelect    | func      | 选中联系人触发回调，参数为当前选中联系人对象 | false    |
| style       | style     | 容器样式(**使用时需要指定高度**)             | false    |

