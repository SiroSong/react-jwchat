import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContactItem from '../ContactItem/ContactItem'
import style from './style.module.css'

export default class ContactList extends Component {
  state = {
    selectedContact: null,
    clientHeight: 0,
    clientHeight: 0,
    thumbHeight: 0,
    scrollTop: 0,
    c_s: 0,
  }

  listArea = React.createRef()

  componentDidMount() {
    this.computeHeight()
  }

  componentDidUpdate(preProps, preState) {
    if (preProps.contactList.length !== this.props.contactList.length) {
      this.computeHeight()
    }
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

  selectContactHandle = (contact) => {
    this.setState({
      selectedContact: contact.id,
    })
    this.props.onSelect && this.props.onSelect(contact)
  }

  scrollHandle = (e) => {
    this.setState({ scrollTop: e.target.scrollTop * this.state.c_s })
  }

  render() {
    const Length = this.props.contactList.length

    return (
      <div className={style.content} style={this.props.style}>
        <div
          className={style.list_area}
          ref={this.listArea}
          onScroll={this.scrollHandle}>
          {this.props.contactList.map((contact, index) => (
            <ContactItem
              contact={contact}
              key={contact.id}
              border={index + 1 !== Length}
              selected={this.state.selectedContact === contact.id}
              onClick={this.selectContactHandle.bind(this, contact)}
            />
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

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
}
