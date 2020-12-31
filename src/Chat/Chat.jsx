import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import ChatInput from '../ChatInput/ChatInput.jsx'

export default class Chat extends Component {
  static defaultProps = {
    width: 500,
    height: 500,
  }

  render() {
    return (
      <div
        className={style.content}
        style={{ width: this.props.width, height: this.props.height }}
      >
        <ChatInput />
      </div>
    )
  }
}
