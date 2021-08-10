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

export default function EmojiPopover({ onSelect = () => {} }) {
  const [visible, setVisible] = useState(false)

  const switchEmojiModal = (vis = null) => {
    if (vis !== null) {
      setVisible(vis)
    } else {
      setVisible(!visible)
    }
  }

  const iconClickHandle = (emoji) => {
    onSelect(emoji)
  }

  useEffect(() => {
    addEventListener('click', (e) => {
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
        style={{ display: !visible && 'none' }}>
        {emojiList.map((emoji) => (
          <span
            onClick={iconClickHandle.bind(this, emoji)}
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
