import React from "react"

import { IMsgBubble } from "@/types"
import { cns } from "@/utils"

export default function MsgBubble({ data, isMe }: IMsgBubble) {
  return (
    <div
      className={cns(
        "relative max-w-[60%] rounded-[3px] bg-[#91ed61] p-2 text-[13px] tracking-[2px] break-all text-[#333]",
        "after:absolute after:top-2 after:size-2 after:rotate-45 after:bg-[#91ed61] after:content-['']",
        isMe ? "after:-right-1" : "after:-left-1",
      )}>
      {data.type === "image" ? (
        <img
          className="block h-37.5 w-auto max-w-100"
          src={data.content}
          alt=""
        />
      ) : (
        data.content
      )}
    </div>
  )
}
