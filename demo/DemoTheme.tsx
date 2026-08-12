import React, { useState } from "react"
import { Chat, IMessage } from "react-jwchat"

import { contact, my } from "./displayData"
import DisplayWrapper from "./DisplayWrapper"

// 主题色全部走 CSS 变量，挂在任意祖先元素上即可，组件不需要额外 props
const purpleTheme = {
  "--color-jw-primary": "#7c3aed",
  "--color-jw-primary-active": "#6d28d9",
  "--color-jw-bubble": "#ddd6fe",
  "--color-jw-border": "#e9d5ff",
  "--color-jw-border-light": "#e9d5ff",
} as React.CSSProperties

export default function DemoTheme() {
  const [chatListData, setChatListData] = useState<IMessage[]>([])
  return (
    <DisplayWrapper>
      <div style={purpleTheme}>
        <Chat
          contact={contact}
          me={my}
          chatList={chatListData}
          onSend={(msg: IMessage) => setChatListData([...chatListData, msg])}
          style={{ width: 600, height: 500, borderRadius: 5 }}
        />
      </div>
    </DisplayWrapper>
  )
}
