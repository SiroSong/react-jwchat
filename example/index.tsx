import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Chat } from '../src/components'

import { contact, contactList, messageList, my } from './fake'

const App = () => {
  const [msgList, setMsgList] = useState(messageList)
  return (
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
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
