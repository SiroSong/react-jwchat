import React, { useState } from "react"
import { IContact, IContactList } from "../../types"
import ContactItem from "../ContactItem"
import ScrollWrapper from "../ScrollWrapper"
import style from "./style.module.css"

function ContactList(props: IContactList) {
  const [selectId, setSelectId] = useState<number | string>()

  const selectContactHandle = (con: IContact) => {
    setSelectId(con.id)

    if (props.onSelect) props.onSelect(con)
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
