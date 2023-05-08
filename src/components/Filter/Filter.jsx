import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import css from 'components/Filter/Filter.module.css';


const initialValue = {
  filter:'123'
}

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
    this.props.onChange(evt.currentTarget.value);
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h3>Find contacts by name</h3>

        <Formik initialValues={initialValue} >
          <Form>
          <label htmlFor="find">Find
            <Field
              className={css.input}
              type="text"
              name="filter"
              value={filter}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            ></Field>
          </label>
        </Form></Formik>
        
      </div>
    );
  }
}
