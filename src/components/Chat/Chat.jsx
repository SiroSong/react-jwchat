import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import ChatRecordList from '../ChatRecordList/ChatRecordList'

const textHeight = 150

export default class Chat extends Component {
  static defaultProps = {
    width: 600,
    height: 500,
    contact: {},
    me: {},
    chatList: [],
    onSend: (msg) => console.warn('传入onSend属性，用于接收输入框内容', msg),
  }

  chatRecordList = React.createRef()

  sendHandle = (msgData) => {
    this.props.onSend(msgData)
    this.chatRecordList.current.computeHeight()
  }

  render() {
    return (
      <div className={style.content} style={{ width: this.props.width }}>
        <ChatHeader data={this.props.contact} />
        <ChatRecordList
          {...this.props}
          ref={this.chatRecordList}
          data={this.props.chatList}
          height={this.props.height - textHeight - 60}
        />
        <ChatInput
          {...this.props}
          height={textHeight}
          onSend={this.sendHandle}
        />
      </div>
    )
  }
}
