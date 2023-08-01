import dayjs from "dayjs"
import React from "react"
import { IMsgItem } from "../../types"
import MsgBubble from "../MsgBubble"
import style from "./style.module.css"

export default function MsgItem({ data, me }: IMsgItem) {
  const isMe = data.user.id === me.id

  return (
    <div
      className={style.content}
      style={{ flexDirection: isMe ? "row-reverse" : "row" }}>
      <div className={style.avatar}>
        <img src={data.user.avatar} />
      </div>
      <div
        className={style.text_area}
        style={{ alignItems: isMe ? "flex-end" : "flex-start" }}>
        <div className={style.comment_area}>
          <span className={style.nickname_text}>{data.user.nickname}</span>
          <span className={style.date_text}>
            {dayjs.unix(data.date).format("MM-DD HH:mm:ss")}
          </span>
        </div>
        <MsgBubble isMe={isMe} data={data.message} />
      </div>
    </div>
  )
}
