import React, { useState } from "react"

import ContactItem from "@/ContactItem"
import { IContact, IContactList } from "@/types"

export default function ContactList({
  data,
  style,
  onSelect,
  onScroll,
}: IContactList) {
  const [selectId, setSelectId] = useState<number | string>()

  const selectContactHandle = (con: IContact | undefined) => {
    if (!con) return

    setSelectId(con.id)
    onSelect?.(con)
  }

  return (
    <div
      className="jw-scroll box-border bg-jw-surface"
      style={{ ...style, overflowY: "auto" }}
      onScroll={onScroll}>
      {data?.map((contact, index) => (
        <ContactItem
          contact={contact}
          key={contact.id}
          border={index + 1 !== data.length}
          selected={selectId === contact.id}
          onClick={selectContactHandle}
        />
      ))}
    </div>
  )
}
