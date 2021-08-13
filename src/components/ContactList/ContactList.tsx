import React, { Component, ReactNode, UIEventHandler, useState } from 'react'
import PropTypes from 'prop-types'
import ContactItem from '../ContactItem/ContactItem'
import style from './style.module.css'
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper'
import { IContact } from '../Chat/Chat'

interface IProps {
  onSelect: Function
  data: IContact[]
  onScroll: UIEventHandler<HTMLDivElement>
}

const ContactList = (props: IProps) => {
  const [selectId, setSelectId] = useState<number | string>()

  const selectContactHandle = (con: IContact) => {
    setSelectId(con.id)
    props.onSelect && props.onSelect(con)
  }

  return (
    <div className={style.list_area} onScroll={props.onScroll}>
      {props.data.map((contact, index) => (
        <ContactItem
          contact={contact}
          key={contact.id}
          border={index + 1 !== props.data.length}
          selected={selectId === contact.id}
          onClick={selectContactHandle.bind(this, contact)}
        />
      ))}
    </div>
  )
}

export default ScrollWrapper(ContactList)

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
}
