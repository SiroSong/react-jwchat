import React, { CSSProperties } from 'react'
import style from './style.module.css'
import cns from '../../utils/toClass'
import { IContactItem } from '../../types'

export default function ContactItem(props: IContactItem) {
  return (
    <div
      style={props.styles}
      className={cns([style.content, props.border && style.bottom_border, props.selected && style.selected])}
      onClick={props.onClick.bind(null, props.contact)}>
      <img className={style.icon} src={props.contact?.avatar} />
      <div className={style.info_area}>
        <span className={`${style.nickname} ${style.ellipsis}`}>{props.contact?.nickname}</span>
        <span className={`${style.desc} ${style.ellipsis}`}>{props.contact?.message}</span>
      </div>
      <span className={style.date_area}>{props.contact?.date}</span>
    </div>
  )
}

ContactItem.defaultProps = {
  onClick: () => {},
}
