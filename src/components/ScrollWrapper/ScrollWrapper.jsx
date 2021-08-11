import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cns } from 'src/utils/toClass'
import styles from './style.module.css'

const ScrollWrapper = (Comp) =>
  React.forwardRef((props, ref) => {
    const scrollView = useRef()
    const thumb = useRef()

    const [viewPortH, setViewPortH] = useState(1)
    const [scrollH, setScrollH] = useState(1)
    const [scrollT, setScrollT] = useState(0)
    const [scrollR, setScrollR] = useState(1)

    const [isPressing, setIsPressing] = useState(false)
    const [showScrollBar, setShowScrollBar] = useState(false)

    const scrollHandle = () => {
      setScrollT(scrollView.current.scrollTop)
    }

    const mouseUpHandle = (e) => {
      setIsPressing(false)
    }

    const mouseDownHandle = (e) => {
      setIsPressing(true)
    }

    const mouseMovingHandle = (e) => {
      if (isPressing !== true) return

      const curScrollT = scrollT * scrollR + e.nativeEvent.movementY / scrollR

      if (curScrollT >= 0 && viewPortH * scrollR + curScrollT <= viewPortH) {
        setScrollT(
          (preScrollT) => preScrollT + e.nativeEvent.movementY / scrollR
        )
      }

      if (curScrollT < 0) {
        setScrollT(0)
      }
    }

    const thumbHeight = () => viewPortH * scrollR

    const transH = () => scrollT * scrollR

    useEffect(() => {
      addEventListener('mouseup', mouseUpHandle)

      return () => {
        removeEventListener('mouseup', mouseUpHandle)
      }
    }, [])

    useEffect(() => {
      if (scrollView.current) {
        console.log(scrollView.current.clientHeight)
        setViewPortH(scrollView.current.clientHeight)
        setScrollH(scrollView.current.scrollHeight)
      }
    }, [props.data])

    useLayoutEffect(() => {
      if (scrollView.current) {
        scrollView.current.scrollTop = scrollT
      }
    }, [scrollT])

    useEffect(() => {
      const sr = viewPortH / scrollH
      setScrollR(sr)

      if (viewPortH < scrollH) {
        setShowScrollBar(true)
      } else {
        setShowScrollBar(false)
      }
    }, [scrollH])

    useEffect(() => {
      setScrollT(scrollH - viewPortH)
    }, [scrollR])

    return (
      <section style={props.style} className={cns([styles.wrapper_content])}>
        <div
          className={styles.list_block}
          ref={scrollView}
          onScroll={scrollHandle}>
          <Comp {...props} />
        </div>
        <aside
          className={cns([styles.scroll_bar_block])}
          style={{ width: showScrollBar ? 8 : 0 }}>
          <span
            ref={thumb}
            className={cns([styles.scroll_thumb])}
            onMouseDown={mouseDownHandle}
            onMouseMove={mouseMovingHandle}
            style={{
              height: thumbHeight(),
              transform: `translateY(${transH()}px)`,
            }}
          />
        </aside>
      </section>
    )
  })

export default ScrollWrapper
