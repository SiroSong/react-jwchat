import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import globalStyle from '../../style/common.module.css'
import MsgBubble from '../MsgBubble/MsgBubble'
import dayjs from 'dayjs'
import { toClasses } from '../../utils/toClass'

export default class MsgItem extends Component {
  static propTypes = {}

  render() {
    const isMe = this.props.data.user.id === this.props.me.id
    // const isMe = true

    return (
      <div
        // className={style.content}
        className={toClasses([style.content, globalStyle.flex])}
        style={{ flexDirection: isMe && 'row-reverse' }}>
        <div className={style.avatar}>
          <img src={this.props.data.user.avatar} />
        </div>
        <div
          className={style.text_area}
          style={{ alignItems: isMe ? 'flex-end' : 'flex-start' }}>
          <div className={style.comment_area}>
            <span className={style.nickname_text}>
              {this.props.data.user.nickname}
            </span>
            <span className={style.date_text}>
              {dayjs.unix(this.props.data.date).format('MM-DD HH:mm:ss')}
            </span>
          </div>
          <MsgBubble isMe={isMe} data={this.props.data.message} />
        </div>
      </div>
    )
  }
}
