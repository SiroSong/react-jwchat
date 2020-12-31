import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import md5 from 'md5'
import dayjs from 'dayjs'

export default class ChatInput extends Component {
  static propTypes = {}

  state = {
    text: '',
    isShift: false,
  }

  textArea = React.createRef()

  componentDidMount() {
    console.log(md5('123'))
  }

  textChangeHandle = (e) => {
    this.setState({ text: e.target.value })
  }

  sendHandle = () => {
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
  }

  resetText = () => this.setState({ text: '' })

  keyDownHandle = (e) => {
    if (e.keyCode === 16) {
      this.setState({ isShift: true })
    }

    if (e.keyCode === 13 && !this.state.isShift) {
      e.preventDefault()
      this.sendHandle()
      this.resetText()
    }
  }

  keyUpHandle = (e) => {
    if (e.keyCode === 16) {
      this.setState({ isShift: false })
    }
  }

  render() {
    return (
      <div className={style.content} style={{ height: this.props.height }}>
        <textarea
          type="text"
          className={style.input_area}
          onKeyUp={this.keyUpHandle}
          onKeyDown={this.keyDownHandle}
          onChange={this.textChangeHandle}
          value={this.state.text}
          placeholder="请输入..."></textarea>
        <div className={style.but_area}>
          <button className={style.but} onClick={this.sendHandle}>
            发送
          </button>
        </div>
      </div>
    )
  }
}
