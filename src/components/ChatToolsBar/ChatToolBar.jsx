import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import EmojiPopover from '../EmojiPopover/EmojiPopover'
import ImgPopover from '../ImgPopover/ImgPopover'

export default function ChatToolBar({
  tools = [],
  onEmojiSelect = () => {},
  onImage = () => {},
}) {
  return (
    <div className={style.content}>
      <EmojiPopover onSelect={onEmojiSelect} />
      <ImgPopover onImage={onImage} />
      {tools.map((tool) => tool)}
    </div>
  )
}

ChatToolBar.propTypes = {
  tools: PropTypes.array,
  onEmojiSelect: PropTypes.func,
  onImage: PropTypes.func.isRequired,
}
