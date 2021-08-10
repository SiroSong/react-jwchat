import React, { useEffect, useRef, useState } from 'react'
import { cns } from 'src/utils/toClass'
import styles from './style.module.css'

const ScrollWrapper = (Comp) =>
  React.forwardRef((props, ref) => {
    const scrollView = useRef()
    const thumb = useRef()

    const [viewPortH, setViewPortH] = useState(1)
    const [scrollH, setScrollH] = useState(1)
    const [scrollT, setScrollT] = useState(0)
    const [thumbH, setThumbH] = useState(0)
    const [scrollR, setScrollR] = useState(1)

    const [isPressing, setIsPressing] = useState(false)

    const scrollHandle = () => {
      setViewPortH(scrollView.current.clientHeight)
      setScrollH(scrollView.current.scrollHeight)
      setScrollT(scrollView.current.scrollTop)
    }

    const mouseUpHandle = () => {
      setIsPressing(false)
    }

    useEffect(() => {
      if (scrollView.current) {
        scrollHandle()
      }
      addEventListener('mouseup', mouseUpHandle)

      return () => {
        removeEventListener('mouseup', mouseUpHandle)
      }
    }, [])

    useEffect(() => {
      if (scrollView.current) {
        scrollView.current.scrollTop = scrollT
      }
    }, [scrollT])

    useEffect(() => {
      const sr = viewPortH / scrollH
      console.log(viewPortH, scrollH)
      setScrollR(sr)
    }, [viewPortH, scrollH])

    return (
      <section style={props.style} className={cns([styles.wrapper_content])}>
        <div
          className={styles.list_block}
          ref={scrollView}
          onScroll={scrollHandle}>
          <Comp {...props} />
        </div>
        <aside className={cns([styles.scroll_bar_block])}>
          <span
            ref={thumb}
            className={cns([styles.scroll_thumb])}
            onMouseDown={(e) => {
              setIsPressing(true)
            }}
            onMouseMove={(e) => {
              if (isPressing !== true) return
              console.log(e.nativeEvent.offsetY)
            }}
            style={{
              height: viewPortH * scrollR,
              transform: `translateY(${scrollT * scrollR}px)`,
            }}
          />
        </aside>
      </section>
    )
  })

export default ScrollWrapper
