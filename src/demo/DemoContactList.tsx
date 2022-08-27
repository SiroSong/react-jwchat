import React from 'react'
import { ContactList } from 'react-jwchat'
import { contactList } from './displayData'
import DisplayWrapper from './DisplayWrapper'

export default function DemoContactList() {
  return (
    <DisplayWrapper>
      <ContactList
        data={contactList}
        style={{
          marginRight: 10,
          height: 500,
          borderRadius: 5,
          overflow: 'hidden',
          width: 240,
          border: '1px solid rgb(226, 226, 226)'
      }}
      />
    </DisplayWrapper>
    )
}