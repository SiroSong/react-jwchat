import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import MsgBubble from '../MsgBubble/MsgBubble'

export default class MsgItem extends Component {
  static propTypes = {}

  render() {
    const isMe = this.props.data.user.id === this.props.me.id

    return (
      <div
        className={style.content}
        style={{ flexDirection: isMe && 'row-reverse' }}>
        <img
          className={style.avator}
          src={this.props.data.user.avator}
          alt=""
        />
        <div
          className={style.text_area}
          style={{ alignItems: isMe && 'flex-end' }}>
          <div className={style.comment_area}>
            <span>{this.props.data.user.nickname}</span>
            <span>{this.props.data.date}</span>
          </div>
          <MsgBubble isMe={isMe} data={this.props.data.message} />
        </div>
      </div>
    )
  }
}
