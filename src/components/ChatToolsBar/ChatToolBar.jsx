import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
export default class ChatToolBar extends Component {
  static propTypes = {
    tools: PropTypes.array,
  }

  static defaultProps = {
    tools: ['emoji', 'file', 'image'],
  }

  renderIcons = (tool) => {
    switch (tool) {
      case 'emoji':
        return <i className={`${style.tool_icon} ${style.emoji}`}></i>
      case 'file':
        return <i className={`${style.tool_icon} ${style.file}`}></i>
      case 'image':
        return <i className={`${style.tool_icon} ${style.pic}`}></i>
      default:
        break
    }
  }

  render() {
    return (
      <div className={style.content}>
        {this.props.tools.map((tool) => this.renderIcons(tool))}
      </div>
    )
  }
}
