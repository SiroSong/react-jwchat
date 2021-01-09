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

  inter = false

  componentDidMount() {
    addEventListener('click', (e) => {
      if (this.inter) {
        this.inter = false
        return
      }
      if (e.target.getAttribute('datatype') === 'emoji') {
        this.clickHandle()
      } else {
        this.setState({
          visible: false,
        })
      }
    })
  }

  clickHandle = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }

  iconClickHandle = () => {
    this.inter = true
  }

  selectHandle = ({ native }) => {
    this.props.onSelect(`${native} `)
    this.clickHandle()
  }

  render() {
    return (
      <div className={style.content}>
        <div className={style.emoji_wrapper} onClick={this.iconClickHandle}>
          {emojiList.map((emoji) => (
            <span className={style.emoji_item}>{emoji}</span>
          ))}
        </div>
        <div
          className={`${style.tool_icon} ${style.emoji}`}
          datatype="emoji"></div>
      </div>
    )
  }
}
