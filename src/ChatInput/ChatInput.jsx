import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

export default class ChatInput extends Component {
  static propTypes = {}

  state = {
    inputVal: '',
  }

  render() {
    return (
      <div className={style.content}>
        <div contentEditable className={style.input_area}></div>
        <div className={style.but_area}>
          <button className={style.but}>发送</button>
        </div>
      </div>
    )
  }
}
