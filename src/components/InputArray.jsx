import React, { Component } from 'react';
import { Formik } from 'formik';

class InputArray extends Component {
  handleInputEnter = (event, setFieldValue) => {
    // setFieldValue('tagInput', event.target.value);
    event.preventDefault();
    console.log(event.key);
    if (event.key === 'enter') {
      alert('enter pressed');
    }
  };

  render() {
    return (
      <Formik initialValues={{ tags: [] }}>
        {({ values, handleChange, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ol>
              {values.tags.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ol>
            <input
              name='tagInput'
              type='text'
              onKeyUp={e => this.handleInputEnter(e, setFieldValue)}
              onChange={handleChange}
            />
          </form>
        )}
      </Formik>
    );
  }
}

export default InputArray;
