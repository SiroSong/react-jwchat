import React, { Component, CSSProperties, UIEventHandler } from 'react'
import style from './style.module.css'
import MsgItem from '../MsgItem/MsgItem'
import { cns } from '../../utils/toClass'
import { IContact } from '../Chat/Chat'

interface IProps {
  onScroll: UIEventHandler<HTMLDivElement>
  onEarlier: UIEventHandler<HTMLButtonElement>
  data: any[]
  me: IContact
  style?: CSSProperties
}

const ChatRecordList = (props: IProps) => {
  return (
    <div className={cns([style.list_area])} onScroll={props.onScroll}>
      <div>
        <button className={style.load_more} onClick={props.onEarlier}>
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
