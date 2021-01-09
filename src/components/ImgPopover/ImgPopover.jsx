import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

export default class ImgPopover extends Component {
  static propTypes = {
    onImage: PropTypes.func.isRequired,
  }

  fileSelector = React.createRef()

  selectImg = () => {
    this.fileSelector.current.click()
  }

  fileHandle = (event) => {
    const files = event.target.files
    this.props.onImage(files)
  }

  render() {
    return (
      <div className={style.content} onClick={this.selectImg}>
        <input
          type="file"
          accept="image/*"
          ref={this.fileSelector}
          onChange={this.fileHandle}
        />
      </div>
    )
  }
}
