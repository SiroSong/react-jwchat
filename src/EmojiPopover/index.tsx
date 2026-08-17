import React, { useState } from "react"

import { IEmojiPopover } from "@/types"

// prettier-ignore
const emojiList = [
  "😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌",
  "😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓",
  "😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","😣","😖","😫","😩",
  "🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰",
  "😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦",
  "😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷",
  "🤒","🤕",
]

export default function EmojiPopover({ onSelect }: IEmojiPopover) {
  const [visible, setVisible] = useState(false)

  return (
    // 用 focusout + relatedTarget 判断"点到外面"，不挂全局监听，也就不存在卸载后泄漏
    <div
      className="relative flex"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setVisible(false)
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setVisible(false)
      }}>
      {visible && (
        <div className="absolute -bottom-22.5 left-7.5 flex w-72 flex-wrap rounded-[5px] border border-solid border-jw-border-strong bg-jw-surface p-0.75 before:absolute before:top-1/2 before:-left-4 before:border-8 before:border-solid before:border-transparent before:border-r-jw-border-strong before:content-[''] after:absolute after:top-1/2 after:-left-[14.5px] after:border-8 after:border-solid after:border-transparent after:border-r-jw-surface after:content-['']">
          {emojiList.map((emoji) => (
            <button
              type="button"
              key={emoji}
              aria-label={emoji}
              onClick={() => onSelect(emoji)}
              className="box-border cursor-pointer border-none bg-transparent px-0.75 hover:rounded-full hover:bg-jw-surface-muted">
              {emoji}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        aria-label="表情"
        aria-expanded={visible}
        onClick={() => setVisible((v) => !v)}
        className="cursor-pointer border-none bg-transparent p-0 text-jw-text-secondary hover:text-jw-primary">
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />
          <path d="M9 9.5v.5M15 9.5v.5" />
        </svg>
      </button>
    </div>
  )
}
