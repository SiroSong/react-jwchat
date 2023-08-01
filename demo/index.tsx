import React, { useState } from 'react';
import { Chat, ContactList } from 'react-jwchat';
import { contact, contactList, messageList, my } from './displayData';

export default () => {
  const [chatListData, setChatListData] = useState<any[]>(messageList);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#65a5ff',
        padding: 20,
      }}
    >
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
      <Chat
        contact={contact}
        me={my}
        chatList={chatListData}
        onSend={(msg: any) => setChatListData([...chatListData, msg])}
        onEarlier={() => console.log('EarlierEarlier')}
        style={{
          width: 600,
          height: 500,
          borderRadius: 5,
        }}
      />
    </div>
  );
};
