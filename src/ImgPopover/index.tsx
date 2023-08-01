import React, { ChangeEventHandler, useRef } from "react"
import { IImgPopover } from "../../types"
import style from "./style.module.css"

export default function ImgPopover({ onImage }: IImgPopover) {
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
