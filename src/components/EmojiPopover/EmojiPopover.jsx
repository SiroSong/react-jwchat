import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import { toClasses } from '../../utils/toClass'

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

export default class EmojiPopover extends Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    addEventListener('click', (e) => {
      if (e.target.getAttribute('datatype') === 'emoji') {
        this.switchEmojiModal(true)
      } else {
        this.switchEmojiModal(false)
      }
    })
  }

  switchEmojiModal = (vis = null) => {
    if (vis !== null) {
      this.setState({ visible: vis })
    } else {
      this.setState({ visible: !this.state.visible })
    }
  }

  iconClickHandle = (emoji) => {
    this.props.onSelect(emoji)
  }

  render() {
    return (
      <div className={style.content}>
        <div
          className={style.emoji_wrapper}
          style={{ display: !this.state.visible && 'none' }}>
          {emojiList.map((emoji) => (
            <span
              onClick={this.iconClickHandle.bind(this, emoji)}
              className={style.emoji_item}
              datatype={emoji}
              key={emoji}>
              {emoji}
            </span>
          ))}
        </div>
        <div
          className={toClasses([style.tool_icon, style.emoji])}
          datatype="emoji"></div>
      </div>
    )
  }
}

EmojiPopover.propTypes = {
  onSelect: PropTypes.func.isRequired,
}
