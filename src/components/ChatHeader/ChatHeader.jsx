import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

export default class ChatHeader extends Component {
  static propTypes = {}

  render() {
    return (
      <div className={style.content}>
        <img className={style.avatar} src={this.props.data.avatar} alt="" />
        <div className={style.desc_area}>
          <span className={style.nickname}>{this.props.data.nickname}</span>
          <span className={style.sologan}>{this.props.data.desc}</span>
        </div>
      </div>
    )
  }
}
