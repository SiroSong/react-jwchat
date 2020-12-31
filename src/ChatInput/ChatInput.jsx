import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

export default class ChatInput extends Component {
  static propTypes = {}

  state = {
    text: '',
    isShift: false,
  }

  textArea = React.createRef()

  textChangeHandle = (e) => {
    this.setState({ text: e.target.value })
  }

  sendHandle = () => {
    this.props.onSend(this.state.text)
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
      <div className={style.content}>
        <textarea
          type="text"
          className={style.input_area}
          onKeyUp={this.keyUpHandle}
          onKeyDown={this.keyDownHandle}
          onChange={this.textChangeHandle}
          value={this.state.text}
          placeholder="请输入..."
        ></textarea>
        <div className={style.but_area}>
          <button className={style.but} onClick={this.enterHandle}>
            发送
          </button>
        </div>
      </div>
    )
  }
}
