import React, { useState } from 'react'
import { render } from 'react-dom'
import { Chat, ContactItem, ContactList } from '../../src'
import { contact, contactList, my } from './fackData'

const App = () => {
  const [msgList, setMsgList] = useState([])

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
        onSend={(msg) => setMsgList([...msgList, msg])}
        style={{
          width: 600,
          height: 500,
        }}
      />
    </div>
  )
}

render(<App />, document.getElementById('root'))
