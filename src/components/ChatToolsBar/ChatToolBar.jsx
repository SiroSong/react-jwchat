import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
// import EmojiPopover from '../EmojiPopover/EmojiPopover'
export default class ChatToolBar extends Component {
  static propTypes = {
    tools: PropTypes.array,
    onEmojiSelect: PropTypes.func,
  }

  static defaultProps = {
    tools: [],
  }

  render() {
    return (
      <div className={style.content}>
        {/* <EmojiPopover onSelect={this.props.onEmojiSelect} /> */}
        {this.props.tools.map((tool) => tool)}
      </div>
    )
  }
}
