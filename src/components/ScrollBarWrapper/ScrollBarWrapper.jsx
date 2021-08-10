import React, { useState } from 'react'
import { cns } from '../../utils/toClass'
import style from './style.module.css'

export default function ScrollBarWrapper(Wrapped) {
  return class extends React.Component {
    state = {
      clientHeight: 0,
      clientHeight: 0,
      thumbHeight: 0,
      scrollTop: 0,
      isBarHide: false,
      c_s: 0,
    }

    scrollRef = React.createRef()
    mouseMoving = false

    componentDidMount() {
      this.computeHeight()
    }

    componentDidUpdate(prevProps) {
      if (prevProps.data.length !== this.props.data.length) {
        this.computeHeight()
      }
    }

    computeHeight = () => {
      const clientHeight = this.scrollRef.current.clientHeight
      const scrollHeight = this.scrollRef.current.scrollHeight
      const isBarHide = clientHeight === scrollHeight
      const c_s = clientHeight / scrollHeight
      const thumbHeight = c_s * clientHeight

      this.setState(
        { clientHeight, scrollHeight, thumbHeight, c_s, isBarHide },
        () => {
          if (this.props.bottom) {
            this.scrollToBottom()
          }
        }
      )
    }

    scrollToBottom = () => {
      this.scrollRef.current.scrollTop =
        this.scrollRef.current.scrollHeight -
        this.scrollRef.current.clientHeight
    }

    scrollHandle = (e) => {
      this.setState({ scrollTop: e.target.scrollTop * this.state.c_s }, () => {
        this.scrollRef.current.scrollTop = e.target.scrollTop
      })
    }

    mouseDownHandle = () => {
      this.mouseMoving = true
    }
    mouseUpHandle = () => {
      this.mouseMoving = false
    }

    dragHandle = (e) => {
      if (this.mouseMoving) {
        console.log(e.clientY - this.scrollRef.current.offsetTop)
      }
    }

    render() {
      const { scrollTop, thumbHeight, isBarHide, clientHeight } = this.state

      return (
        <div className={cns([style.content])} style={this.props.style}>
          <Wrapped
            {...this.props}
            ref={this.scrollRef}
            isBarHide={isBarHide}
            scrollTop={scrollTop}
            thumbHeight={thumbHeight}
            clientHeight={clientHeight}
            onScroll={this.scrollHandle}
          />
          <div
            className={style.scroll_bar_track}
            style={{ display: isBarHide && 'none' }}>
            <span
              onMouseDown={this.mouseDownHandle}
              onMouseUp={this.mouseUpHandle}
              onMouseMove={this.dragHandle}
              className={style.scroll_bar_thumb}
              style={{
                height: thumbHeight,
                transform: `translateY(${scrollTop}px)`,
              }}
            />
          </div>
        </div>
      )
    }
  }
}
