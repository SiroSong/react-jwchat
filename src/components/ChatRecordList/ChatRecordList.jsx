import React, { Component } from 'react'
import style from './style.module.css'
import MsgItem from '../MsgItem/MsgItem'
import { cns } from '../../utils/toClass'

const ChatRecordList = React.forwardRef((props, ref) => {
  return (
    <div className={cns([style.list_area])} ref={ref} onScroll={props.onScroll}>
      <div className={style.load_more_area}>
        <button className={style.load_more} onClick={props.onEarlier}>
          加载更多···
        </button>
      </div>
      {props.data.map((bubble) => (
        <MsgItem {...props} data={bubble} key={bubble._id} />
      ))}
    </div>
  )
})

export default ChatRecordList
