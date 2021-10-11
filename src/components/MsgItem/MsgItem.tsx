import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import MsgBubble from '../MsgBubble/MsgBubble'
import dayjs from 'dayjs'
import cns from '../../utils/toClass'
import { TMessage } from '../ChatInput/ChatInput'
import { IContact } from '../Chat/Chat'

interface IProps {
  data: TMessage
  me: IContact
}

export default function MsgItem({ data, me }: IProps) {
  const isMe = data.user.id === me.id

  return (
    <div
      className={cns([style.content, 'flex'])}
      style={{ flexDirection: isMe ? 'row-reverse' : 'row' }}>
      <div className={style.avatar}>
        <img src={data.user.avatar} />
      </div>
      <div
        className={style.text_area}
        style={{ alignItems: isMe ? 'flex-end' : 'flex-start' }}>
        <div className={style.comment_area}>
          <span className={style.nickname_text}>{data.user.nickname}</span>
          <span className={style.date_text}>
            {dayjs.unix(data.date).format('MM-DD HH:mm:ss')}
          </span>
        </div>
        <MsgBubble isMe={isMe} data={data.message} />
      </div>
    </div>
  )
}

MsgItem.propTypes = {
  data: PropTypes.object.isRequired,
  me: PropTypes.object.isRequired,
}
