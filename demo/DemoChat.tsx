import React, { useState } from "react"
import { Chat, IMessage } from "react-jwchat"

import { contact, my } from "./displayData"
import DisplayWrapper from "./DisplayWrapper"

export default function DemoChat() {
  const [chatListData, setChatListData] = useState<IMessage[]>([])
  return (
    <DisplayWrapper>
      <Chat
        contact={contact}
        me={my}
        chatList={chatListData}
        onSend={(msg: IMessage) => setChatListData([...chatListData, msg])}
        onEarlier={() => console.log("EarlierEarlier")}
        style={{
          width: 600,
          height: 500,
          borderRadius: 5,
          border: "1px solid rgb(226, 226, 226)",
        }}
      />
    </DisplayWrapper>
  )
}
