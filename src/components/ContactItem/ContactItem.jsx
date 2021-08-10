import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import { cns } from '../../utils/toClass'

export default function ContactItem({
  styles,
  selected,
  border,
  contact,
  onClick,
}) {
  return (
    <div
      style={styles}
      className={cns([
        style.content,
        border && style.bottom_border,
        selected && style.selected,
      ])}
      onClick={onClick.bind(this, contact)}>
      <img className={style.icon} src={contact.avatar} />
      <div className={style.info_area}>
        <span className={`${style.nickname} ${style.ellipsis}`}>
          {contact.nickname}
        </span>
        <span className={`${style.desc} ${style.ellipsis}`}>
          {contact.message}
        </span>
      </div>
      <span className={style.date_area}>{contact.date}</span>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  className: PropTypes.any,
  style: PropTypes.object,
}

ContactItem.defaultProps = {
  onClick: () => {},
}
