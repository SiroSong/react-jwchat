import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

export default class MsgBubble extends Component {
  static propTypes = {}

  render() {
    switch (this.props.data.type) {
      case 'text':
        return (
          <div
            className={`${style.text_content} ${style.arrow} ${
              this.props.isMe ? style.arrow_right : style.arrow_left
            }`}>
            {this.props.data.content}
          </div>
        )

      default:
        break
    }
  }
}
