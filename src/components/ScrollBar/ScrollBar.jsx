import React, { useRef, useState } from 'react'
import styles from './style.module.css'

export default function ScrollBar(props) {
  const [clientHeight, setClientHeight] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [isScrollBarHide, setIsScrollBarHide] = useState(true)
  const [thumbHeight, setThumbHeight] = useState(0)
  const [C_S, setC_S] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  return <span className={styles.scrollbar}></span>
}
