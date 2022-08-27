import React from 'react'
import { IContact } from '../../types'
import style from './style.module.css'

export default function ChatHeader(props: { data: IContact }) {
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
