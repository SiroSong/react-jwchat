import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

const emojiList = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '😂',
  '🤣',
  '🥲',
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
  '🥸',
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
  static propTypes = {}

  state = {
    visible: false,
  }

  componentDidMount() {
    addEventListener('click', (e) => {
      if (this.state.visible || e.target.getAttribute('datatype') === 'emoji') {
        this.clickHandle()
      }
    })
  }

  clickHandle = () => this.setState({ visible: !this.state.visible })

  iconClickHandle = (event) => {
    const emoji = event.target.getAttribute('datatype')
    this.props.onSelect(emoji)
  }

  render() {
    return (
      <div className={style.content}>
        <div
          className={style.emoji_wrapper}
          onClick={this.iconClickHandle}
          style={{ display: !this.state.visible && 'none' }}>
          {emojiList.map((emoji) => (
            <span className={style.emoji_item} datatype={emoji} key={emoji}>
              {emoji}
            </span>
          ))}
        </div>
        <div
          className={`${style.tool_icon} ${style.emoji}`}
          datatype="emoji"></div>
      </div>
    )
  }
}
