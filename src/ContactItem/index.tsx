import React from "react"

import { IContactItem } from "@/types"
import { cns } from "@/utils"

const ellipsis = "max-w-25 overflow-hidden text-ellipsis whitespace-nowrap"

export default function ContactItem({
  style,
  selected,
  border,
  contact,
  onClick,
}: IContactItem) {
  return (
    <div
      style={style}
      className={cns(
        "relative box-border flex min-h-15 w-full cursor-pointer items-center rounded-[5px] bg-jw-surface px-2.5 transition-all duration-300",
        border &&
          !selected &&
          "after:absolute after:bottom-0 after:left-[5%] after:h-px after:w-[90%] after:bg-jw-border after:content-['']",
        selected && "z-10 scale-105 shadow-[0_0_20px_rgb(180,180,180)]",
      )}
      onClick={() => onClick?.(contact)}>
      <img
        className="size-8.75 overflow-hidden rounded-full"
        src={contact?.avatar}
        alt={contact?.nickname ?? ""}
      />
      <div className="flex flex-1 flex-col pl-2.5">
        <span className={cns("text-[13px] text-jw-text", ellipsis)}>
          {contact?.nickname}
        </span>
        <span className={cns("text-[11px] text-jw-text-secondary", ellipsis)}>
          {contact?.message}
        </span>
      </div>
      <span className="text-xs text-jw-text-secondary">{contact?.date}</span>
    </div>
  )
}
