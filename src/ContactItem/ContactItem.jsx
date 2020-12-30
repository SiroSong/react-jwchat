import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

export default class ContactItem extends Component {
  iconClickHandle = (e) => {
    e.stopPropagation()
    this.props.iconOnClick
      ? this.props.iconOnClick(this.props.contact)
      : this.clickHandle()
  }

  clickHandle = (e) => {
    this.props.onClick(this.props.contact)
  }

  render() {
    return (
      <div
        style={this.props.style}
        className={`${style.content} ${
          this.props.border && style.bottom_border
        } ${this.props.selected && style.selected}`}
        onClick={this.clickHandle}
      >
        <img
          className={style.icon}
          src={this.props.contact.avator}
          onClick={this.iconClickHandle}
        />
        <div className={style.info_area}>
          <span className={`${style.nickname} ${style.ellipsis}`}>
            {this.props.contact.nickname}
          </span>
          <span className={`${style.desc} ${style.ellipsis}`}>
            {this.props.contact.desc}
          </span>
        </div>
      </div>
    )
  }
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  className: PropTypes.any,
  style: PropTypes.object,
}

ContactItem.defaultProps = {
  onClick: () => {},
}
