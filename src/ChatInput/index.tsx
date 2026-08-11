import React, { KeyboardEventHandler, useState } from "react"

import ChatToolBar from "@/ChatToolsBar"
import { IChatInput, IMessage } from "@/types"
import { uid } from "@/utils"

export default function ChatInput({ me, onSend, onImage }: IChatInput) {
  const [text, setText] = useState("")

  const canSend = !!text.trim()

  const sendHandle = () => {
    if (!canSend) return

    const msgData: IMessage = {
      _id: uid(),
      date: Math.floor(Date.now() / 1000),
      user: me,
      message: { type: "text", content: text },
    }

    onSend(msgData)
    setText("")
  }

  const keyDownHandle: KeyboardEventHandler = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendHandle()
    }
  }

  return (
    <div className="box-border flex w-full shrink-0 flex-col">
      <ChatToolBar
        onEmojiSelect={(emoji) => setText(text + emoji)}
        onImage={onImage}
      />
      <textarea
        className="h-25 resize-none border-none p-2.5 text-[13px] tracking-[2px] outline-none placeholder:text-[#999]"
        onKeyDown={keyDownHandle}
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="请输入..."
      />
      <div className="self-end pt-0.75 pr-2.5 pb-2.5">
        <button
          type="button"
          className="rounded-[3px] border-none bg-[#2ba245] px-5 py-0.75 text-white outline-none active:bg-[#1aad19] disabled:bg-[#ddd]"
          onClick={sendHandle}
          disabled={!canSend}>
          发送
        </button>
      </div>
    </div>
  )
}
