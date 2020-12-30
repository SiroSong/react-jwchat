import React from 'react'
import { render } from 'react-dom'
import { ContactItem, ContactList } from '../../src'

const contact = {
  id: 1,
  avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
  nickname: '小鱼儿',
  desc: '这是我的第一条信息',
}
const contactList = [
  {
    id: 1,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿',
    desc: '这是我的第一条信息这是我的第一条信这是我的第一条信',
  },
  {
    id: 2,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿',
    desc: '这是我的第一条信息',
  },
  {
    id: 3,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿',
    desc: '这是我的第一条信息',
  },
  {
    id: 4,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿',
    desc: '这是我的第一条信息',
  },
  {
    id: 5,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿',
    desc: '这是我的第一条信息',
  },
]

const App = () => (
  <div
    style={{
      background: 'cadetblue',
      padding: '20px',
    }}
  >
    {/* <ContactItem
      contact={contact}
      onClick={(contact) => console.log(contact)}
      border
    /> */}
    <ContactList contactList={contactList} />
  </div>
)
render(<App />, document.getElementById('root'))
