import React, { useState } from 'react'
import { render } from 'react-dom'
import { Chat, ContactItem, ContactList } from '../../src'
// import { Chat, ContactItem, ContactList } from 'react-jwchat'
import { contact, contactList, messageList, my } from './fackData'

const App = () => {
  const [msgList, setMsgList] = useState(messageList)

  const imageHandle = (imgs) => {
    console.log(imgs)
  }

  return (
    <div
      style={{
        background: '#2BA245',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      {/* <ContactItem
        contact={contact}
        onClick={(contact) => console.log(contact)}
        border
      /> */}
      <ContactList
        contactList={contactList}
        style={{
          marginRight: 10,
          height: 500,
          borderRadius: 5,
        }}
      />
      <Chat
        contact={contact}
        me={my}
        chatList={msgList}
        onSend={(msg) => setMsgList([...msgList, msg])}
        onEarlier={() => console.log('EarlierEarlier')}
        onImage={imageHandle}
        style={{
          width: 800,
          height: 700,
          borderRadius: 5,
        }}
      />
    </div>
  )
}

render(<App />, document.getElementById('root'))
