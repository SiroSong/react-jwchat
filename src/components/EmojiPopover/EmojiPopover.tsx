import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import { cns } from '../../utils/toClass'

const emojiList = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '😂',
  '🤣',
  '😊',
  '😇',
  '🙂',
  '🙃',
  '😉',
  '😌',
  '😍',
  '🥰',
  '😘',
  '😗',
  '😙',
  '😚',
  '😋',
  '😛',
  '😝',
  '😜',
  '🤪',
  '🤨',
  '🧐',
  '🤓',
  '😎',
  '🤩',
  '🥳',
  '😏',
  '😒',
  '😞',
  '😔',
  '😟',
  '😕',
  '🙁',
  '😣',
  '😖',
  '😫',
  '😩',
  '🥺',
  '😢',
  '😭',
  '😤',
  '😠',
  '😡',
  '🤬',
  '🤯',
  '😳',
  '🥵',
  '🥶',
  '😱',
  '😨',
  '😰',
  '😥',
  '😓',
  '🤗',
  '🤔',
  '🤭',
  '🤫',
  '🤥',
  '😶',
  '😐',
  '😑',
  '😬',
  '🙄',
  '😯',
  '😦',
  '😧',
  '😮',
  '😲',
  '🥱',
  '😴',
  '🤤',
  '😪',
  '😵',
  '🤐',
  '🥴',
  '🤢',
  '🤮',
  '🤧',
  '😷',
  '🤒',
  '🤕',
]

interface IProps {
  onSelect: Function
}

export default function EmojiPopover({ onSelect }: IProps) {
  const [visible, setVisible] = useState<boolean>(false)

  const switchEmojiModal = (vis: boolean) => {
    setVisible(vis)
  }

  const iconClickHandle = (emoji: string) => {
    onSelect(emoji)
  }

  useEffect(() => {
    addEventListener('click', (e: { target: any }) => {
      if (e.target.getAttribute('datatype') === 'emoji') {
        switchEmojiModal(true)
      } else {
        switchEmojiModal(false)
      }
    })
  }, [])

  return (
    <div className={style.content}>
      <div
        className={style.emoji_wrapper}
        style={{ display: visible ? 'block' : 'none' }}>
        {emojiList.map((emoji) => (
          <span
            onClick={iconClickHandle.bind(null, emoji)}
            className={style.emoji_item}
            datatype={emoji}
            key={emoji}>
            {emoji}
          </span>
        ))}
      </div>
      <div
        className={cns([style.tool_icon, style.emoji])}
        datatype="emoji"></div>
    </div>
  )
}

EmojiPopover.propTypes = {
  onSelect: PropTypes.func.isRequired,
}
