import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'
import MsgItem from '../MsgItem/MsgItem'

export default class ChatRecordList extends Component {
  static propTypes = {}

  state = {
    clientHeight: 0,
    clientHeight: 0,
    thumbHeight: 0,
    scrollTop: 0,
    isBarHide: true,
    c_s: 0,
  }

  listArea = React.createRef()

  componentDidMount() {
    this.computeHeight()
  }

  computeHeight = () => {
    setTimeout(() => {
      const clientHeight = this.listArea.current.clientHeight
      const scrollHeight = this.listArea.current.scrollHeight
      const isBarHide = clientHeight === scrollHeight
      const c_s = clientHeight / scrollHeight
      const thumbHeight = c_s * clientHeight

      this.setState({ clientHeight, scrollHeight, thumbHeight, c_s, isBarHide })
    }, 0)
  }

  scrollHandle = (e) => {
    this.setState({ scrollTop: e.target.scrollTop * this.state.c_s })
  }

  render() {
    return (
      <div className={style.content} style={{ height: this.props.height }}>
        <div
          className={style.list_area}
          ref={this.listArea}
          onScroll={this.scrollHandle}>
          <div className={style.load_more_area}>
            <button className={style.load_more}>加载更多···</button>
          </div>
          {this.props.data.map((bubble) => (
            <MsgItem {...this.props} data={bubble} key={bubble._id} />
          ))}
        </div>
        <div
          className={style.scroll_bar_track}
          style={{ display: this.state.isBarHide && 'none' }}>
          <span
            className={style.scroll_bar_thumb}
            style={{
              height: this.state.thumbHeight,
              top: this.state.scrollTop,
            }}></span>
        </div>
      </div>
    )
  }
}
