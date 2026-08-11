import React, { useRef } from "react"

import { IImgPopover } from "@/types"

export default function ImgPopover({ onImage }: IImgPopover) {
  const fileSelector = useRef<HTMLInputElement>(null)

  return (
    <button
      type="button"
      aria-label="发送图片"
      onClick={() => fileSelector.current?.click()}
      className="flex cursor-pointer border-none bg-transparent p-0 text-[#666] hover:text-[#2ba245]">
      <svg
        className="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="m4 17 4.5-4.5a2 2 0 0 1 2.8 0L16 17" />
      </svg>
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={fileSelector}
        onChange={(e) => onImage(e.target.files)}
      />
    </button>
  )
}
