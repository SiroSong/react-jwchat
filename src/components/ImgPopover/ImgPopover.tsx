import React, { ChangeEventHandler, Component, useRef } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

interface IProps {
  onImage: Function
}

export default function ImgPopover({ onImage }: IProps) {
  const fileSelector = useRef<HTMLInputElement>(null)

  const selectImg = () => {
    if (fileSelector.current) {
      fileSelector.current.click()
    }
  }

  const fileHandle: ChangeEventHandler<HTMLInputElement> = (event) => {
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
