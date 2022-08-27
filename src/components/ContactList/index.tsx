import React, { Component, ReactNode, UIEventHandler, useState } from 'react'
import style from './style.module.css'
import ScrollWrapper from '../ScrollWrapper'
import ContactItem from '../ContactItem'
import {IContact, IContactList } from '../../types'

const ContactList = (props: IContactList) => {
  const [selectId, setSelectId] = useState<number | string>()

  const selectContactHandle = (con: IContact) => {
    setSelectId(con.id)
    props.onSelect && props.onSelect(con)
  }

  return (
    <div className={style.list_area} onScroll={props.onScroll}>
      {props?.data?.map((contact, index) => (
        <ContactItem
          contact={contact}
          key={contact.id}
          border={index + 1 !== props.data.length}
          selected={selectId === contact.id}
          onClick={selectContactHandle.bind(null, contact)}
        />
      ))}
    </div>
  )
}

export default ScrollWrapper(ContactList)
