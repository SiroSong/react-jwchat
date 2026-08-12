import React from "react"

import MsgBubble from "@/MsgBubble"
import { IMsgItem } from "@/types"
import { formatDate } from "@/utils"

export default function MsgItem({ data, me }: IMsgItem) {
  const isMe = data.user.id === me.id

  return (
    <div
      className="flex pt-5"
      style={{ flexDirection: isMe ? "row-reverse" : "row" }}>
      <div className="size-8.75 min-h-8.75 min-w-8.75 pt-3.5">
        <img
          className="size-full overflow-hidden rounded-full"
          src={data.user.avatar}
          alt={data.user.nickname ?? ""}
        />
      </div>
      <div
        className="flex flex-1 flex-col px-2.5"
        style={{ alignItems: isMe ? "flex-end" : "flex-start" }}>
        <div className="pb-1 text-xs text-jw-text-tertiary">
          <span>{data.user.nickname}</span>
          <span className="ml-2.5">{formatDate(data.date)}</span>
        </div>
        <MsgBubble isMe={isMe} data={data.message} />
      </div>
    </div>
  )
}
