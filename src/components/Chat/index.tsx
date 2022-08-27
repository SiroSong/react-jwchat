import React from 'react'
import style from './style.module.css'
import ChatInput from '../ChatInput'
import ChatRecordList from '../ChatRecordList'
import ScrollWrapper from '../ScrollWrapper'
import {IChatProps} from "../../types";
import ChatHeader from '../ChatHeader'

const textHeight = 150

const WrappedChatRecordList = ScrollWrapper(ChatRecordList)

const defaultChatProps = {
  style: {
    width: 600,
    height: 500,
  },
  contact: {},
  me: {},
  chatList: [],
  onSend: (msg: any) => console.warn('传入onSend属性，用于接收输入框内容', msg),
}

Chat.defaultProps = defaultChatProps

export default function Chat(props: IChatProps) {
  const sendHandle = (msgData: any) => {
    props.onSend(msgData)
  }

  const listHeight = props.style.height - textHeight - 60

  return (
    <div className={style.content} style={props.style}>
      <ChatHeader data={props.contact} />
      <WrappedChatRecordList
        {...props}
        data={props.chatList}
        style={{ height: listHeight }}
        scrollToBottom
      />
      <ChatInput {...props} height={textHeight} onSend={sendHandle} onImage={props.onImage} />
    </div>
  )
}
