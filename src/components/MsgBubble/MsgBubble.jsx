import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import { toClasses } from '../../utils/toClass'

export default function MsgBubble({ data, isMe }) {
  const renderContent = (message) => {
    switch (message.type) {
      case 'text':
        return message.content
      case 'image':
        return (
          <img
            className={toClasses([style.img_content])}
            src={message.content}
          />
        )
      default:
        break
    }
  }

  return (
    <div
      className={toClasses([
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
