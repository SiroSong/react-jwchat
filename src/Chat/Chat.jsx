import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import ChatRecordList from '../ChatRecordList/ChatRecordList'

const textHeight = 150

export default class Chat extends Component {
  static defaultProps = {
    width: 500,
    height: 500,
    style: {
      width: 500,
      height: 500,
    },
    contact: {},
    me: {},
    chatList: [],
    onSend: (msg) => console.warn('传入onSend属性，用于接收输入框内容', msg),
  }

  render() {
    return (
      <div className={style.content} style={this.props.style}>
        <ChatHeader data={this.props.contact} />
        <ChatRecordList
          {...this.props}
          data={this.props.chatList}
          height={this.props.height - textHeight - 60}
        />
        <ChatInput
          {...this.props}
          height={textHeight}
          onSend={this.props.onSend}
        />
      </div>
    )
  }
}
