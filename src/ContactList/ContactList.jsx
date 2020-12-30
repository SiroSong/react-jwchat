import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ContactItem } from '..'
import style from './style.module.css'

export default class ContactList extends Component {
  state = {
    selectedContact: null,
    clientHeight: 0,
    clientHeight: 0,
    thumbHeight: 0,
    scrollTop: 0,
  }

  listArea = null
  c_s = 0

  componentDidMount() {
    const clientHeight = this.listArea.clientHeight
    const scrollHeight = this.listArea.scrollHeight
    this.c_s = clientHeight / scrollHeight
    const thumbHeight = this.c_s * clientHeight

    this.setState({ clientHeight, scrollHeight, thumbHeight })
  }

  selectContactHandle = (contact) => {
    this.setState({
      selectedContact: contact.id,
    })
    this.props.onSelect && this.props.onSelect(contact)
  }

  scrollHandle = (e) => {
    this.setState({ scrollTop: e.target.scrollTop * this.c_s })
  }

  render() {
    const Length = this.props.contactList.length

    return (
      <div className={style.content}>
        <div
          className={style.list_area}
          ref={(ref) => (this.listArea = ref)}
          onScroll={this.scrollHandle}
        >
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
        <div className={style.scroll_bar_track}>
          <span
            className={style.scroll_bar_thumb}
            style={{
              height: this.state.thumbHeight,
              top: this.state.scrollTop,
            }}
          ></span>
        </div>
      </div>
    )
  }
}

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
}
