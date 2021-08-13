import React, { Component, UIEventHandler, useState } from 'react'
import style from './style.module.css'
import * as md5 from 'md5'
import dayjs from 'dayjs'
import ChatToolBar from '../ChatToolsBar/ChatToolBar'
import { IContact } from '../Chat/Chat'

interface IProps {
  me: IContact
  onSend: UIEventHandler
  onImage?: UIEventHandler
  height: number
}

export default function ChatInput({
  me,
  onSend = () => {},
  onImage = () => {},
  height,
}: IProps) {
  const [text, setText] = useState('')
  const [isShift, setIsShift] = useState(false)
  const [isAllowSend, setIsAllowSend] = useState(false)

  const textChangeHandle = (e) => {
    const isAllowSend = !!e.target.value.trim()
    const text = e.target.value

    setText(text)
    setIsAllowSend(isAllowSend)
  }

  const sendHandle = () => {
    if (!isAllowSend) {
      return
    }

    const randomNum = Math.floor(Math.random() * 1000)
    const date = dayjs().unix()

    const msgData = {
      _id: md5(`${text}${date}${randomNum}`),
      date: date,
      user: me,
      message: {
        type: 'text',
        content: text,
      },
    }
    onSend(msgData)
    resetText()
  }

  const resetText = () => {
    setText('')
    setIsAllowSend(false)
  }

  const keyDownHandle = (e) => {
    if (e.keyCode === 16) {
      setIsShift(true)
    }

    if (e.keyCode === 13 && !isShift) {
      e.preventDefault()
      sendHandle()
    }
  }

  const keyUpHandle = (e) => {
    if (e.keyCode === 16) {
      setIsShift(false)
    }
  }

  const emojiSelectHandle = (emoji) => {
    setText(text + emoji)
    setIsAllowSend(true)
  }

  const fileHandle = (files) => {
    onImage(files)
  }

  return (
    <div className={style.content} style={{ height: height }}>
      <ChatToolBar onEmojiSelect={emojiSelectHandle} onImage={fileHandle} />
      <textarea
        type="text"
        className={style.input_area}
        onKeyUp={keyUpHandle}
        onKeyDown={keyDownHandle}
        onChange={textChangeHandle}
        value={text}
        placeholder="请输入..."></textarea>
      <div className={style.but_area}>
        <button
          className={style.but}
          onClick={sendHandle}
          disabled={!isAllowSend}>
          发送
        </button>
      </div>
    </div>
  )
}
