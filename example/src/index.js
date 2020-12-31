import React from 'react'
import { render } from 'react-dom'
import { Chat, ContactItem, ContactList } from '../../src'

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
    nickname: '小鱼儿1',
    message: '这是我的第一条信息这是我的第一条信这是我的第一条信',
    date: '02-11',
  },
  {
    id: 2,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿2',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 3,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿3',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 4,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿4',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 5,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿5',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 1,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿1',
    message: '这是我的第一条信息这是我的第一条信这是我的第一条信',
    date: '02-11',
  },
  {
    id: 2,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿2',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 3,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿3',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 4,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿4',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 5,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿5',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 1,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿1',
    message: '这是我的第一条信息这是我的第一条信这是我的第一条信',
    date: '02-11',
  },
  {
    id: 2,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿2',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 3,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿3',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 4,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿4',
    message: '这是我的第一条信息',
    date: '02-11',
  },
  {
    id: 5,
    avator: 'http://m.imeitou.com/uploads/allimg/201220/3-201220112616.jpg',
    nickname: '小鱼儿5',
    message: '这是我的第一条信息',
    date: '02-11',
  },
]

const App = () => (
  <div
    style={{
      background: 'cadetblue',
      padding: '20px',
    }}>
    {/* <ContactItem
      contact={contact}
      onClick={(contact) => console.log(contact)}
      border
    /> */}
    {/* <ContactList contactList={contactList} /> */}
    <Chat contact={contact} />
  </div>
)
render(<App />, document.getElementById('root'))
