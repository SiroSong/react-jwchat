import React from "react"

import { IContact } from "@/types"

export default function ChatHeader({ data }: { data: IContact }) {
  return (
    <div className="flex shrink-0 items-center p-2.5">
      <img
        className="size-10 overflow-hidden rounded-full bg-jw-surface-muted"
        src={data.avatar}
        alt={data.nickname ?? ""}
      />
      <div className="flex flex-col pl-2.5">
        <span className="text-sm text-jw-text">{data.nickname}</span>
        <span className="text-xs text-jw-text-tertiary">{data.desc}</span>
      </div>
    </div>
  )
}
