import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import MsgBubble from '../MsgBubble/MsgBubble'
import dayjs from 'dayjs'

export default class MsgItem extends Component {
  static propTypes = {}

  render() {
    // const isMe = this.props.data.user.id === this.props.me.id
    const isMe = true

    return (
      <div
        className={style.content}
        style={{ flexDirection: isMe && 'row-reverse' }}>
        <div className={style.avator}>
          <img src={this.props.data.user.avator} />
        </div>
        <div
          className={style.text_area}
          style={{ alignItems: isMe ? 'flex-end' : 'flex-start' }}>
          <div className={style.comment_area}>
            <span className={style.nickname_text}>
              {this.props.data.user.nickname}
            </span>
            <span className={style.date_text}>
              {dayjs.unix(this.props.data.date).format('YYYY-MM-DD')}
            </span>
          </div>
          <MsgBubble isMe={isMe} data={this.props.data.message} />
        </div>
      </div>
    )
  }
}
