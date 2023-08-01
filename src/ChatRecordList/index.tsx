import React from "react"
import { IChatRecordList } from "../../types"
import cns from "../../utils/toClass"
import MsgItem from "../MsgItem"
import style from "./style.module.css"

const ChatRecordList = (props: IChatRecordList) => {
  return (
    <div className={cns([style.list_area])}>
      <div>
        <button
          type="button"
          className={style.load_more}
          onClick={props.onEarlier}>
          加载更多···
        </button>
      </div>
      {props.data.map((bubble) => (
        <MsgItem {...props} data={bubble} key={bubble._id} />
      ))}
    </div>
  )
}

export default ChatRecordList
