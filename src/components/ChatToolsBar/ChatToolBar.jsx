import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import EmojiPopover from '../EmojiPopover/EmojiPopover'
import ImgPopover from '../ImgPopover/ImgPopover'
export default class ChatToolBar extends Component {
  static propTypes = {
    tools: PropTypes.array,
    onEmojiSelect: PropTypes.func,
    onImage: PropTypes.func.isRequired,
  }

  static defaultProps = {
    tools: [],
  }

  render() {
    return (
      <div className={style.content}>
        <EmojiPopover onSelect={this.props.onEmojiSelect} />
        <ImgPopover onImage={this.props.onImage} />
        {this.props.tools.map((tool) => tool)}
      </div>
    )
  }
}
