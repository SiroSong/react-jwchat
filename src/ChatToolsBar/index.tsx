import React from "react"

import EmojiPopover from "@/EmojiPopover"
import ImgPopover from "@/ImgPopover"
import { IChatToolBar } from "@/types"

export default function ChatToolBar({ onEmojiSelect, onImage }: IChatToolBar) {
  return (
    <div className="flex h-7.5 shrink-0 items-center gap-2.5 px-2.5">
      {onEmojiSelect && <EmojiPopover onSelect={onEmojiSelect} />}
      {onImage && <ImgPopover onImage={onImage} />}
    </div>
  )
}
