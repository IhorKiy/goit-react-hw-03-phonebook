import React, { Component } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from 'components/ContactList/ContactList.module.css'

export class ContactList extends Component {
  handleSubmit = id => {
    this.props.onSubmit(id);
  };
  render() {
    const filteredContacts = this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ul className={css.list}>
            {filteredContacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                on0nSubmit={this.handleSubmit}
              />
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
export default ContactList;
