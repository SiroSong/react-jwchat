import React from 'react'
import style from './style.module.css'
import cns from '../../utils/toClass'
import { IMsgBubble, IPureMsg } from '../../types'

export default function MsgBubble({ data, isMe }: IMsgBubble) {
  const renderContent = (message: IPureMsg) => {
    switch (message.type) {
      case 'text':
        return message.content
    case 'image':
      return <img className={cns([style.img_content])} src={message.content} />
    default:
      break
    }
  }

  return (
    <div
      className={cns([
        style.text_content,
        style.arrow,
        isMe ? style.arrow_right : style.arrow_left,
        ])}>
      {renderContent(data)}
    </div>
    )
}
