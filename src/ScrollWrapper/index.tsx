import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { IScrollWrapper } from "../../types"
import cns from "../../utils/toClass"
import styles from "./style.module.css"

type HOC<InjectedProps, OwnProps> = <P>(
  Component: React.ComponentType<P & InjectedProps>,
) => React.ComponentType<P & OwnProps>

const ScrollWrapper: HOC<any, IScrollWrapper> = (Comp) => (props) => {
  const scrollView = useRef<HTMLDivElement>(null)
  const thumb = useRef<HTMLSpanElement>(null)

  const [viewPortH, setViewPortH] = useState<number>(1)
  const [scrollH, setScrollH] = useState<number>(1)
  const [scrollT, setScrollT] = useState<number>(0)
  const [scrollR, setScrollR] = useState<number>(1)

  const [isPressing, setIsPressing] = useState<boolean>(false)
  const [showScrollBar, setShowScrollBar] = useState<boolean>(false)

  const [shadowStyle, setShadowStyle] = useState<string>("")

  const scrollHandle = (): void => {
    if (scrollView.current) {
      setScrollT(scrollView.current.scrollTop)
    }
  }

  const mouseUpHandle = (): void => {
    setIsPressing(false)
  }

  const mouseDownHandle = (): void => {
    setIsPressing(true)
  }

  const mouseMovingHandle = (e: React.MouseEvent): void => {
    if (isPressing !== true) return

    if (scrollT < 0) {
      setScrollT(0)
    } else if (scrollT > scrollH - viewPortH) {
      setScrollT(scrollH - viewPortH)
    } else {
      const movementY = e.nativeEvent.movementY
      setScrollT((preScrollT) => preScrollT + movementY / scrollR)
    }
  }

  const thumbHeight = (): number => viewPortH * scrollR

  const transH = (): number => scrollT * scrollR

  useEffect(() => {
    addEventListener("mouseup", mouseUpHandle)

    return () => {
      removeEventListener("mouseup", mouseUpHandle)
    }
  }, [])

  useEffect(() => {
    if (scrollView.current) {
      setViewPortH(scrollView.current.clientHeight)
      setScrollH(scrollView.current.scrollHeight)
    }
  }, [props.data])

  useLayoutEffect(() => {
    if (scrollView.current) {
      scrollView.current.scrollTop = scrollT
    }

    if (showScrollBar !== true) return

    if (scrollT <= 0) {
      setShadowStyle(styles.shadow_bottom)
    } else if (scrollT >= scrollH - viewPortH) {
      setShadowStyle(styles.shadow_top)
    } else {
      setShadowStyle(styles.shadow_vertical)
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
    if (props.scrollToBottom) {
      setScrollT(scrollH - viewPortH)
    }
  }, [scrollR])

  return (
    <section
      style={props.style}
      className={cns([styles.wrapper_content, shadowStyle])}>
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
}

export default ScrollWrapper
