import React from 'react'
import { ContactItem } from 'react-jwchat'
import { contact } from './displayData'
import DisplayWrapper from "./DisplayWrapper";

export default function DemoContactList() {
  return (
    <DisplayWrapper>
      <ContactItem contact={contact}/>
    </DisplayWrapper>
  )
}