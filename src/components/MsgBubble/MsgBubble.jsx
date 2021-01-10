import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

export default class MsgBubble extends Component {
  static propTypes = {}

  renderContent = (message) => {
    switch (message.type) {
      case 'text':
        return message.content
      case 'image':
        return <img src={message.content} />
      default:
        break
    }
  }

  render() {
    const { data, isMe } = this.props

    return (
      <div
        className={`${style.text_content} ${style.arrow} ${
          isMe ? style.arrow_right : style.arrow_left
        }`}>
        {this.renderContent(data)}
      </div>
    )
  }
}
