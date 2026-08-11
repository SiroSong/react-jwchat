import React from "react"

import ChatHeader from "@/ChatHeader"
import ChatInput from "@/ChatInput"
import ChatRecordList from "@/ChatRecordList"
import { IChatProps, IMessage } from "@/types"

export default function Chat({
  style = { width: 600, height: 500 },
  contact = {},
  me = {},
  chatList = [],
  onSend = (msg: IMessage) =>
    console.warn("传入onSend属性，用于接收输入框内容", msg),
  onImage,
  onEarlier,
}: IChatProps) {
  return (
    <div
      className="flex flex-col overflow-hidden border border-solid border-[#f1f1f1] bg-white"
      style={style}>
      <ChatHeader data={contact} />
      <ChatRecordList data={chatList} me={me} onEarlier={onEarlier} />
      <ChatInput me={me} onSend={onSend} onImage={onImage} />
    </div>
  )
}
