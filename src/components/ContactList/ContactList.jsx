import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import ContactItem from '../ContactItem/ContactItem'
import style from './style.module.css'
import ScrollBarWrapper from '../ScrollBarWrapper/ScrollBarWrapper'

const ContactList = React.forwardRef((props, ref) => {
  const [selectId, setSelectId] = useState()
  const selectContactHandle = (con) => {
    setSelectId(con.id)
    props.onSelect && props.onSelect(contact)
  }

  return (
    <div className={style.list_area} ref={ref} onScroll={props.onScroll}>
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
})

export default ScrollBarWrapper(ContactList)

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
}
