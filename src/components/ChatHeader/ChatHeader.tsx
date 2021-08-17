import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import { IContact } from '../Chat/Chat'

interface IProps {
  data: IContact
}

export default function ChatHeader(props: IProps) {
  return (
    <div className={style.content}>
      <img className={style.avatar} src={props.data.avatar} />
      <div className={style.desc_area}>
        <span className={style.nickname}>{props.data.nickname}</span>
        <span className={style.sologan}>{props.data.desc}</span>
      </div>
    </div>
  )
}

ChatHeader.propTypes = {}
