import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import globalStyle from '../../style/common.module.css'
import MsgBubble from '../MsgBubble/MsgBubble'
import dayjs from 'dayjs'
import { toClasses } from '../../utils/toClass'

export default function MsgItem({ data, me }) {
  const isMe = data.user.id === me.id

  return (
    <div
      className={toClasses([style.content, globalStyle.flex])}
      style={{ flexDirection: isMe && 'row-reverse' }}>
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
