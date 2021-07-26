import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

export default function ImgPopover({ onImage }) {
  const fileSelector = React.createRef()

  const selectImg = () => {
    fileSelector.current.click()
  }

  const fileHandle = (event) => {
    const files = event.target.files
    onImage(files)
  }
  return (
    <div className={style.content} onClick={selectImg}>
      <input
        type="file"
        accept="image/*"
        ref={fileSelector}
        onChange={fileHandle}
      />
    </div>
  )
}

ImgPopover.propTypes = {
  onImage: PropTypes.func.isRequired,
}
