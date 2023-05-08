import React, { Component } from 'react';
import css from 'components/ContactItem/ContactItem.module.css'

export class ContactItem extends Component {
  state = {
    id: this.props.contact.id,
  };

  handleProps = evt => {
    this.props.on0nSubmit(this.state.id);
  };

  render() {
    const { id, name, number } = this.props.contact;
    return (
      <>
        <li className={css.item} key={id}>
          <p className={css.item__name}>{name}</p>
          <p className={css.item__number}>{number}</p>
          <button className={css.item__buttom} type="submit" onClick={this.handleProps}>
            Delete
          </button>
        </li>
      </>
    );
  }
}
 
