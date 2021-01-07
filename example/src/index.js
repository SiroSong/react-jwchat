import React, { useState } from 'react'
import { render } from 'react-dom'
import { Chat, ContactItem, ContactList } from '../../src'
import { contact, contactList, my } from './fackData'

const App = () => {
  const [msgList, setMsgList] = useState([
    {
      _id: 'ecbb310507ce9c7d3bd57eca046a80f3',
      date: 1610016423,
      user: {
        id: 1234,
        avator: '//game.gtimg.cn/images/lol/act/a20201103lmpwjl/icon-ht.png',
        nickname: 'sirosong',
        desc: '这是我的第一条信息',
      },
      message: { type: 'text', content: '打野你会玩吗？' },
    },
    {
      _id: 'f3386f6dcf4e69a8bd51a0d688d05580',
      date: 1610016470,
      user: {
        id: 9527,
        avator: '//game.gtimg.cn/images/lol/act/img/champion/Khazix.png',
        nickname: '卡兹克',
        desc: '这是我的第一条信息',
      },
      message: { type: 'text', content: '❓ ' },
    },
    {
      _id: 'f3386f6dcf4e69a8bd51a0d688d0e980',
      date: 1610016470,
      user: {
        id: 1234,
        avator: '//game.gtimg.cn/images/lol/act/a20201103lmpwjl/icon-ht.png',
        nickname: 'sirosong',
        desc: '这是我的第一条信息',
      },
      message: { type: 'text', content: '对面下路压线那么深你不来？' },
    },
    {
      _id: '75b5bde8f3b9ef7aa9b704492cb28baf',
      date: 1610016580,
      user: {
        id: 1234,
        avator: '//game.gtimg.cn/images/lol/act/a20201103lmpwjl/icon-ht.png',
        nickname: 'sirosong',
        desc: '这是我的第一条信息',
      },
      message: { type: 'text', content: '敌我打野差距👎 ' },
    },
  ])

  return (
    <div
      style={{
        background: 'cadetblue',
        padding: '20px',
        display: 'flex',
      }}>
      {/* <ContactItem
    contact={contact}
    onClick={(contact) => console.log(contact)}
    border
  /> */}
      <ContactList
        contactList={contactList}
        style={{ marginRight: 10, height: 500 }}
      />
      <Chat
        contact={contact}
        me={my}
        chatList={msgList}
        onSend={(msg) => {
          console.log(JSON.stringify(msg))
          setMsgList([...msgList, msg])
        }}
        style={{
          width: 600,
          height: 500,
        }}
      />
    </div>
  )
}

render(<App />, document.getElementById('root'))
