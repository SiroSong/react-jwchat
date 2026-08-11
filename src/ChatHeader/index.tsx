import React from "react"

import { IContact } from "@/types"

export default function ChatHeader({ data }: { data: IContact }) {
  return (
    <div className="flex shrink-0 items-center p-2.5">
      <img
        className="size-10 overflow-hidden rounded-full bg-[aqua]"
        src={data.avatar}
        alt={data.nickname ?? ""}
      />
      <div className="flex flex-col pl-2.5">
        <span className="text-sm text-[#333]">{data.nickname}</span>
        <span className="text-xs text-[#999]">{data.desc}</span>
      </div>
    </div>
  )
}
