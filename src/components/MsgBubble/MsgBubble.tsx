import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import cns from '../../utils/toClass'
import { TMessage, TPureMsg } from '../ChatInput/ChatInput'

interface IProps {
  data: TPureMsg
  isMe: boolean
}

export default function MsgBubble({ data, isMe }: IProps) {
  const renderContent = (message: TPureMsg) => {
    switch (message.type) {
      case 'text':
        return message.content
      case 'image':
        return (
          <img className={cns([style.img_content])} src={message.content} />
        )
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

MsgBubble.propTypes = {
  data: PropTypes.object.isRequired,
  isMe: PropTypes.bool.isRequired,
}
