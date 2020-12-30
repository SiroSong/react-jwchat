import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ContactItem } from '..'
import style from './style.module.css'

export default class ContactList extends Component {
  state = {
    selectedContact: null,
  }

  selectContactHandle = (id) => {
    this.setState({
      selectedContact: id,
    })
  }

  render() {
    const Length = this.props.contactList.length
    return (
      <div className={style.content}>
        <div className={style.list_area}>
          {this.props.contactList.map((contact, index) => (
            <ContactItem
              contact={contact}
              key={contact.id}
              border={index + 1 !== Length}
              selected={this.state.selectedContact === contact.id}
              onClick={this.selectContactHandle.bind(this, contact.id)}
            />
          ))}
        </div>
      </div>
    )
  }
}

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
}
