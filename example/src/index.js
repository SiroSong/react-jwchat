import React, { useState } from 'react'
import { render } from 'react-dom'
import { Chat, ContactItem, ContactList } from '../../src'
import { contact, my } from './fackData'

const App = () => {
  const [msgList, setMsgList] = useState([])

  return (
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
      <Chat
        contact={contact}
        me={my}
        chatList={msgList}
        onSend={(msg) => setMsgList([...msgList, msg])}
      />
    </div>
  )
}

render(<App />, document.getElementById('root'))
