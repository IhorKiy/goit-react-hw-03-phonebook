import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import css from 'components/ContactForm/ContactForm.module.css';
// import styled from 'styled-components';


const initialValue = {
  name: '',
  number: '',
};

let userSchema = object({
  name: string().min(3).required(),
  number: number()
    .min(7)
    .max(7)
    .required(),
});



export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };

    const nameExists = this.props.contacts.some(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (nameExists) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(newContact);
    }

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Formik initialValues={initialValue} validationSchema={userSchema}>
        <Form className={css.form} onSubmit={this.handleSubmit}>
          <div className={css.form}>
            <p>Name</p>
            <Field
              type="text"
              name="name"
              required
              value={name}
              onChange={this.handleChange}
            />
            <ErrorMessage name="name" component='div'/>
            <p>Number</p>
            <Field
              type="tel"
              name="number"
              value={number}
              
              required
              onChange={this.handleChange}
            />
            <ErrorMessage name="number" />
            <br></br>
            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    );
  }
}
