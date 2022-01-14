import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Chat, ContactList } from '../src/components'

import { contact, contactList, messageList, my } from './fake'

const App = () => {
  const [msgList, setMsgList] = useState(messageList)
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <ContactList
          data={contactList}
          style={{
            marginRight: 10,
            height: 500,
            borderRadius: 5,
            overflow: 'hidden',
            width: 240,
          }}
        />
      </div>
      <div>
        <Chat
          contact={contact}
          me={my}
          chatList={msgList}
          onSend={(msg) => setMsgList([...msgList, msg])}
          onEarlier={() => console.log('EarlierEarlier')}
          style={{
            width: 600,
            height: 500,
            borderRadius: 5,
          }}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
