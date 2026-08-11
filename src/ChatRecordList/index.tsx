import React, { useEffect, useRef } from "react"

import MsgItem from "@/MsgItem"
import { IChatRecordList } from "@/types"

export default function ChatRecordList({
  data,
  me,
  onEarlier,
}: IChatRecordList) {
  const scrollView = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollView.current
    if (el) el.scrollTop = el.scrollHeight
  }, [data])

  return (
    <div
      ref={scrollView}
      className="jw-scroll min-h-0 flex-1 overflow-y-auto border-x-0 border-y border-solid border-[rgb(226,226,226)] p-2.5">
      <button
        type="button"
        className="mx-auto flex h-5 w-25 cursor-pointer items-center justify-center rounded-[10px] border-none bg-[#f1f1f1] text-center text-xs text-[#999] outline-none"
        onClick={onEarlier}>
        加载更多···
      </button>
      {data.map((msg) => (
        <MsgItem data={msg} me={me} key={msg._id} />
      ))}
    </div>
  )
}
