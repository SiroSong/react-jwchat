---
nav:
  title: Components
  path: /components
---

## ContactList

Demo:

<code src="../../demo/DemoContactList.tsx"></code>

## API

### Properties

| key      | type      | desc                        | required |
|----------|-----------|-----------------------------|----------|
| data     | contact[] | 联系人列表，数组中的每个元素都为 contact 类型 | true     |
| style    | style     | 容器样式(**使用时需要指定高度**)         | false    |

### Events

| key      | type      | desc                        | required |
|----------|-----------|-----------------------------|----------|
| onSelect | func      | 选中联系人触发回调，参数为当前选中联系人对象      | false    |
