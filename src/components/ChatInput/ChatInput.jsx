import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import md5 from 'md5'
import dayjs from 'dayjs'
import ChatToolBar from '../ChatToolsBar/ChatToolBar'

export default class ChatInput extends Component {
  static propTypes = {}

  state = {
    text: '',
    isShift: false,
    isAllowSend: false,
  }

  textArea = React.createRef()

  componentDidMount() {
    console.log(md5('123'))
  }

  textChangeHandle = (e) => {
    const isAllowSend = !!e.target.value.trim()
    const text = e.target.value

    this.setState({ text, isAllowSend })
  }

  sendHandle = () => {
    if (!this.state.isAllowSend) {
      return
    }

    const randomNum = Math.floor(Math.random() * 1000)
    const date = dayjs().unix()

    const msgData = {
      _id: md5(`${this.state.text}${date}${randomNum}`),
      date: date,
      user: this.props.me,
      message: {
        type: 'text',
        content: this.state.text,
      },
    }
    this.props.onSend(msgData)
    this.resetText()
  }

  resetText = () => this.setState({ text: '', isAllowSend: false })

  keyDownHandle = (e) => {
    if (e.keyCode === 16) {
      this.setState({ isShift: true })
    }

    if (e.keyCode === 13 && !this.state.isShift) {
      e.preventDefault()
      this.sendHandle()
    }
  }

  keyUpHandle = (e) => {
    if (e.keyCode === 16) {
      this.setState({ isShift: false })
    }
  }

  emojiSelectHandle = (emoji) => {
    this.setState({
      text: this.state.text + emoji,
      isAllowSend: true,
    })
  }

  render() {
    return (
      <div className={style.content} style={{ height: this.props.height }}>
        <ChatToolBar onEmojiSelect={this.emojiSelectHandle} />
        <textarea
          type="text"
          className={style.input_area}
          onKeyUp={this.keyUpHandle}
          onKeyDown={this.keyDownHandle}
          onChange={this.textChangeHandle}
          value={this.state.text}
          placeholder="请输入..."></textarea>
        <div className={style.but_area}>
          <button
            className={style.but}
            onClick={this.sendHandle}
            disabled={!this.state.isAllowSend}>
            发送
          </button>
        </div>
      </div>
    )
  }
}
